const { message } = require('prompt');
const{UserService}=require('../services/index.js')
const jwt = require('jsonwebtoken')
const {SECRET_KEY}=require('../config/serverConfig.js');

function verifyJWT(token)
{
    try {
        const payload = jwt.verify(token,SECRET_KEY);
        return payload;
    } catch (error) {
        return null;
    }
}
const userService = new UserService();

 const create = async(req,res)=>
 {  
    try {

        const user =await userService.create(req.body);
        if(!user)
        {
            return res.status(401).json({
                message:"User already exists"
            })
        }
        return res.status(200).json({
            message:"Successfully created account"
        })
    } catch (error) {
        console.log('Something went wrong in service layer')
        return res.status(200).json({
            message:"Failed",
            error:error.message
        })
    }
    
 }

 const getUser = async(req,res)=>
    { 
       
        try {

            const authHeader = req.headers['authorization'];
            if(!authHeader)
            {
                return res.status(403).json({ message: 'Token is missing!' });
            }

            const token = authHeader.split(' ')[1];
            const data = verifyJWT(token);
            

            if (data==null||!data.userId) {
                return res.status(403).json({ message: 'Token is invalid or expired!' });
            }

            const user = await userService.getUser(data.userId);
            if(user==null)
            return res.status(200).json({
                message:"Sorry no  user with that email id is found",
            })

            return res.status(200).json({
                message:"Success",
                data:user
            })
        } catch (error) {
            console.log('Something went wrong in service layer')
        return res.status(200).json({
            message:"Failed",
            error:error.message
        })
    

   }
}

const update = async(req,res)=>{
    try {
        //   console.log(req.headers);
        const authHeader = req.headers['authorization'];
        // console.log(authHeader)
       
        if(!authHeader)
        {
            return res.status(403).json({ message: 'Token is missing!' });
        }
      
        const token = authHeader.split(' ')[1];
        // console.log(token)
        const data = verifyJWT(token);
        // console.log(data.userId);
        
      

        if (data==null||!data.userId) {
            return res.status(403).json({ message: 'Token is invalid or expired!' });
        }
        
        const newInfo ={...req.body} 

        const user = await userService.update(data.userId,newInfo);
        
        return res.status(200).json({
            message:"Data has been updated",
            updated_data: {...newInfo,email:data.userId}
            
        })
    } catch (error) {
        return res.status(500).json(
            {
               message:"For some reason we can't update your data",
               error:error.message
            }
        )
        
    }
   
}

const destroy = async (req,res)=>
{  
    try {
        const authHeader = req.headers['authorization'];
        if(!authHeader)
        {
            return res.status(403).json({ message: 'Token is missing!' });
        }

        const token = authHeader.split(' ')[1];
        const data = verifyJWT(token);
        
        if (data==null||!data.userId) {
            return res.status(403).json({ message: 'Token is invalid or expired!' });
        }
        const response =userService.destroy(data.userId);
        return res.status(200).json({
            message:"User has been removed from the database",
            data : response
        })
    } catch (error) {
        return res.status(500).json({
            message:"User has not been deleted from databse due to some error",
            error: error.message
        })
    }

}
const signin =async(req,res)=>{
    try {
        
        const email =req.body["email"];
     
        const password = req.body["password"];
 
        const response = await userService.signin(email,password);
        if(response)
        {  
             // send token that is response as cookie when you integrate token based session*******
            return res.status(200).json({
                token:response,
                message:true
            })
          
        }
        
        else
        {
            return res.status(200).json({
                // message : "you have given wrong credentials"
                message:false
            })
            
        }
       

    } catch (error) {
        return res.status(200).json({
            error:message.error
        })
    }
}
 module.exports={
    create,
    getUser,
    update,
    destroy,
    signin
 }