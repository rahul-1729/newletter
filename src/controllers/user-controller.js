const{UserService}=require('../services/index.js')

const userService = new UserService();

 const create = async(req,res)=>
 {  
    try {
        
        const user =await userService.create(req.body);
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
 module.exports={
    create,
    getUser,
    update
 }