const{Users}=require('../models/index');

class UserRepository{
    async create(data)
    {
        try {
           
            const user = await Users.create(data);
            return user;
        } catch (error) {
            console.log('Something went wrong in repository layer')
            throw error;
            
        }
    }

    async getUser(email)
    {  
        try {
            const user = await Users.findOne({
                where:{
                    email:email
                }
            })
            return user;
        } catch (error) {
            console.log("something went wrong in the repo layer")
            throw error;
        }
        
    }
}
module.exports=UserRepository