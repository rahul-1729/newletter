const{Users}=require('../models/index');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken')
const {SECRET_KEY}=require('../config/serverConfig');
class UserRepository{
    async create(data)
    {
        try {
                  const hash = await bcrypt.hash(data.password, saltRounds)
                   
                    const user1 = await Users.findOne({
                        where:{
                            email:data.email
                        }
                    })
                    if(user1)
                    {
                        return null;

                    }
                    else
                    {
                        const user = await Users.create({
                            firstName: data.firstName,
                            lastName:  data.lastName,
                            email:     data.email,
                            password:   hash
                        });
    
                    
                return user;
                    }
                   
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
            // console.log(user.password);
            return user;
        } catch (error) {
            console.log("something went wrong in the repo layer")
            throw error;
        }
        
    }

    async update(email,data)
    {
         try {
              
            const hash = await bcrypt.hash(data.password, saltRounds)
            data.password = hash;
            console.log(data);
           
            const updated_user = Users.update(data,{
                where:{
                    email:email
                }
             
            })
            return updated_user; 
         } catch (error) {
            console.log("Something went wrong in the repository layer")
            throw error;
         }
    }

    async destroy(email)
        {
            try {
                const response = Users.destroy({
                    where:{
                        email:email
                    }
                })
                return response
            } catch (error) {
                console.log("Something went wrong in the repository layer")
                throw error;
            }
        }

    async signin(email,password)
    {
        try {
            const user = await Users.findOne({
                where:{
                    email:email
                }
            })
            const match = await bcrypt.compare(password, user.password)

            if(match)
            {    
                
                const token = await jwt.sign({userId:user.email},SECRET_KEY,{ expiresIn: '1h' });
                return token;
            } 
            else {
                 console.log('ERROR: Could not log in');
            }
        } catch (error) {
            console.log("Something went wrong in the repository layer")
            throw error;
        }
    }
}
module.exports=UserRepository