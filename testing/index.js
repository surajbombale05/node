const twilio = require('twilio');

const accountSid = 'your_account_sid';
const authToken = 'your_auth_token';

const client = new twilio(accountSid, authToken);

const recipientNumber = 'whatsapp:recipient_phone_number';
const otp = generateOTP(); // Implement your OTP generation logic here

client.messages
  .create({
    body: `Your OTP is: ${otp}`,
    from: 'whatsapp:your_twilio_phone_number',
    to: recipientNumber,
  })
  .then((message) => console.log(message.sid))
  .catch((error) => console.error(error));

function generateOTP() {
  // Implement your OTP generation logic here
  return Math.floor(1000 + Math.random() * 9000).toString();
}
