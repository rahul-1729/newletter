const generatePDF = require('./generatePDF');
const getRegisteredEmails = require('./getRegisteredEmails');
const sendEmails = require('./sendEmails');

async function sendNewsletter() {
  const content = 'This is the content of the weekly newsletter.';
  await generatePDF(content);
  const emails = await getRegisteredEmails();
//   console.log(emails);
  
 await sendEmails(emails, '/home/aeyravat/Downloads/NewsLetter/Backend/newsletter.pdf');
  
}

module.exports = sendNewsletter;