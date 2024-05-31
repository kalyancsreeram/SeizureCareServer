exports.postContactus = (req, res, next) => {
   console.log(req.body);
   const { firstname, lastname, email, phone, country, message } = req.body;  
   const nodemailer = require('nodemailer');

   const transporter = nodemailer.createTransport({
         service: 'gmail',
         auth: {
            user: 'seizurecare@gmail.com',
            pass: 'nkabwdtcphyqrfif'
         }
   });

   const emailTemplate = `     
      <h2>Below are the details provided by the user from contact us form:</h2>
      <ul>
         <li><strong>Name:</strong> ${firstname}  ${lastname}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Country:</strong> ${country}</li>
          <li><strong>Message:</strong> ${message}</li>
      </ul>`;

   const mailOptions = {
      from: 'seizurecare@gmail.com',
      to: 'seizurecare@gmail.com',
      subject: `Contact from ${firstname} ${lastname}`,
      html: emailTemplate      
   };

   transporter.sendMail(mailOptions, function(error, info){
      console.log(error);
      if (error) {
         res.status(500).send('Something went wrong.');     
      } else {
         console.log('Email sent: ' + info.response);
         res.status(200).send('Email sent successfully.');
      }
   });


}