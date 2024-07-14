const {UserRepository}=require('../repositories/index.js')

class UserService
{
    constructor()
    {
        this.userRepository = new UserRepository
    }

    async create(data)
    {
        try {
            
             const User =await this.userRepository.create(data)
             return User;
        } catch (error) {
            console.log('Something went wrong in service layer')
            throw error;
        }
    }

    async getUser(email)
    {
        try {
            const user =await this.userRepository.getUser(email)
            return user;
        } catch (error) {
            console.log('Something went wrong in service layer')
            throw error;
        }
    }
    async update(email,data)
    {
        try {
            const user = await this.userRepository.update(email,data)
            return user;
        } catch (error) {
            console.log('Something went wrong in service layer')
            throw error;
        }
    }
    async destroy(email)
    {
        try {
            const response =this.userRepository.destroy(email);
            return response;
        } catch (error) {
            console.log('Something went wrong in service layer')
            throw error;
        }
    }

    async signin(email,password)
    {
        try {
            const response =this.userRepository.signin(email,password);
            return response;
        } catch (error) {
            console.log('Something went wrong in service layer')
            throw error;
        }
    }
}
module.exports= UserService
