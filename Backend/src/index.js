const express = require('express');
const app = express();
const cron = require('node-cron');
const sendNewsLetter = require('./utils/sendNewsLetter');
const cors = require('cors');
const {PORT}=require('./config/serverConfig');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/index.js');

const nodemailer = require('nodemailer')

const setUPAndStart =()=>{
    app.use(cors())
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api',apiRoutes);
    
    app.listen(PORT,()=>{

         
        // cron.schedule('*/7 * * * * *',async()=>{
        //     await sendNewsLetter();
        // });

        console.log(`Server started on port ${PORT}`);
    })
}







setUPAndStart();