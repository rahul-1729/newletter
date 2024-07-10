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
}
module.exports=UserRepository