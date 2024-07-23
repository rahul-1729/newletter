const dotenv = require('dotenv');
dotenv.config();

module.exports={
    PORT:process.env.PORT,
    SECRET_KEY:process.env.SECRET_KEY,
    EMAIL_ID:process.env.EMAIL_ID,
    EMAIL_PASS:process.env.EMAIL_PASS

}