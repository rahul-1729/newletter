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
 module.exports={
    create
 }