const{Users}=require('../models/index');

async function getRegisteredEmails() {
  try {
    const users = await Users.findAll({
      attributes: ['email'],
    });
    
    return users.map(user => user.email);
  } catch (error) {
    console.error('Error fetching registered emails:', error);
    throw error;
  }
}

module.exports = getRegisteredEmails;