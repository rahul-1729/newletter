const { message } = require('prompt');
const{UserService}=require('../services/index.js')

const userService = new UserService();

 const create = async(req,res)=>
 {  
    try {
        
        const user =await userService.create(req.body);
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
            const user = await userService.getUser(req.params.email);
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
        const user = await userService.update(req.params.email,req.body);
        console.log(user);
        return res.status(200).json({
            message:"Data has been updated"
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
        const response =userService.destroy(req.params.email);
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
        const email =req.query.email;
        const password = req.query.password;
        const response = await userService.signin(email,password);
        if(response)
        return res.status(200).json({
            message : "you have been signed in"
        })
        else
        return res.status(200).json({
            message : "you have given wrong credentials"
        })

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