
'use strict';
const nodemailer = require('nodemailer');

async function main() {

  const transporter = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    secureConnection: false,
    port: 587,
    secure: false,
    tls: { ciphers: 'SSLv3' },
    auth: {
      user: 'Steve.Demo.LearningFuze2@outlook.com',
      pass: '02North05'
    }
  });

  const info = await transporter.sendMail({
    from: 'Steve.Demo.LearningFuze2@outlook.com', // sender address
    to: 'Stephen.N.Smith.3@outlook.com', // list of receivers
    subject: 'We are live. Nodemailer is working for Steve Smith',
    text: 'Hello'
  });

  console.log('Message sent: %s', info.messageId);

  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

}

main().catch(console.error);
