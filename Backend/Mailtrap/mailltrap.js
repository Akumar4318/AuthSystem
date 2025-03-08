const  {MailtrapClient} = require("mailtrap");
require('dotenv').config()
const TOKEN =process.env.MAILTRAP_TOKEN ;
const ENDPOINT=process.env.MAILTRAP_ENDPOINT;

exports.mailtrapClient = new MailtrapClient({
  token: TOKEN,
  endpoint:ENDPOINT
});

exports.sender = {
  email: "hello@demomailtrap.co",
  name: "abhishek kumar ",
};


