require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const sendSMS = async (to, msg) => {
  client.messages
    .create({ body: msg, from: process.env.TWILIO_PHONE_NUMBER, messagingServiceSid: process.env.TWILIO_MESSAGE_SERVICE_ID  ,to: to })
    .then((message) => console.log(message.sid));
};

module.exports = {
  sendSMS,
};
