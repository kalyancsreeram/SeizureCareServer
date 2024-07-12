exports.postPatientFormData = (req, res, next) => {
   console.log(req.body);   
   const { typeOfService } = req.body; 
   const nodemailer = require('nodemailer');
   const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
        user: 'seizurecare@gmail.com',
        pass: 'nkabwdtcphyqrfif'
        }
    });
    let emailTemplate = '';  

    if(typeOfService !== 'EEG Services'){
    const { drName, hospital, contactInfo, message, typeOfService } = req.body; 

    emailTemplate = `     
        <h2>Below are the details provided by the user from Order online form:</h2>
        <ul>
            <li><strong>Type of service:</strong> ${typeOfService}</li>
            <li><strong>Doctor Name:</strong> ${drName}</li>
            <li><strong>Hospital:</strong> ${hospital}</li>
            <li><strong>Contact Info:</strong> ${contactInfo}</li>
            <li><strong>Message:</strong> ${message}</li>
        </ul>`;       
       
   }else {

    const { firstname, lastname, dob, gender, addressLine1, addressLine2, city, state, zip, phone, email,
        uid, eegType, advisingDoctor, timeslot, message
      } = req.body;
    
    emailTemplate = `     
      <h2>Below are the details provided by the user from Order online form:</h2>
      <ul>
          <li><strong>Type of service:</strong> ${typeOfService}</li>
          <li><strong>First Name:</strong> ${firstname}</li>
          <li><strong>Hospital:</strong> ${lastname}</li>
          <li><strong>Date of birth:</strong> ${dob}</li>
          <li><strong>Gender:</strong> ${gender}</li>
           <li><strong>Address Line 1:</strong> ${addressLine1}</li>
          <li><strong>Address Line 2:</strong> ${addressLine2}</li>
          <li><strong>City:</strong> ${city}</li>
          <li><strong>State:</strong> ${state}</li>
          <li><strong>Zip:</strong> ${zip}</li>
           <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>UID:</strong> ${uid}</li>
          <li><strong>EEG Type:</strong> ${eegType}</li>
          <li><strong>Advising Doctor:</strong> ${advisingDoctor}</li>
          <li><strong>Time Slot:</strong> ${timeslot}</li>
          <li><strong>Message:</strong> ${message}</li>
      </ul>`;
   }

   const mailOptions = {
        from: 'seizurecare@gmail.com',
        to: 'seizurecare@gmail.com',
        subject: `Order ${typeOfService}`,
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