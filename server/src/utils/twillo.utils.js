require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const sendSMS = async (to, msg) => {
  try {
    const message = await client.messages.create({
      body: msg,
      from: process.env.TWILIO_PHONE_NUMBER,
      to,
    });
    console.log('Sending SMS successful');
    return message.sid;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  sendSMS,
}
