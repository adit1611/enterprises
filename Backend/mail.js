const nodemailer = require('nodemailer');


const sendEmail = (email,name,phone, query, message, callback) => {
  // Create a transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'meena.05021997devi@gmail.com', // Your email
      pass: 'sbro fmub aqxr vlcf'   // Your email password
    }
  });

  // Define email options
  let mailOptions = {
    from: `"Sender Name" <${email}>`, // Sender address
    to: "meena.05021997devi@gmail.com",   // List of recipients
    name:`${name}`,
    contact:`${phone}`,
    subject: `${query}`,         // Subject line
    text: message,      // Plain text body
    html: `<b>${query}</b>` // HTML body

  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return callback(error, null);
    }
    callback(null, info);
  });
};

module.exports = sendEmail;
