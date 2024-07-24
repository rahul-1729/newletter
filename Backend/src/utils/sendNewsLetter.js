const generatePDF = require('./generatePDF');
const getRegisteredEmails = require('./getRegisteredEmails');
const sendEmails = require('./sendEmails');

async function sendNewsletter() {
  const content = 'Hope get more in this world of never ending greed';
  await generatePDF(content);
  const emails = await getRegisteredEmails();
//   console.log(emails);
  
 await sendEmails(emails, '/home/aeyravat/Downloads/NewsLetter/Backend/newsletter.pdf');
  
}

module.exports = sendNewsletter;