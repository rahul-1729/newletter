const sender= require('../config/emailConfig');
const fs = require('fs');

async function sendEmails(emails, attachmentPath) {
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'your-email@gmail.com',
//       pass: 'your-email-password',
//     },
//   });
   
//  console.log(emails)
//    console.log(emails.length)
 
  for (let i=0;i<emails.length;i++) {
      let mailOptions = {
      to: emails[i],
      subject: "Weekly Newsletter",
      text: "Here is your weekly newsletter!",
      attachments: [
        {
          filename: 'newsletter.pdf',
          path: attachmentPath,
        },
      ],
    };
    
    try {
        // console.log(emails[i])
        await sender.sendMail(mailOptions,(err, data)=>{
            // console.log("hi")
            if(err)
            {
                console.log(err);
            }
            else
            {    
                console.log(data)
                console.log(`Email sent to: ${emails[i]}`);
                
            }
          });
         
       
      } catch (error) {
        console.error(`Failed to send email to: ${emails[i]}`, error);
      }
  
  }
}

module.exports = sendEmails;
