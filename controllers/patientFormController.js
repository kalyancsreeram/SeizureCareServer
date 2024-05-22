exports.postPatientFormData = (req, res, next) => {
    console.log(req.body);
    res.send('Received');   
 }