const express = require('express');
const bodyParser = require('body-parser');
//const fileupload = require("express-fileupload");
//const multer = require('multer')

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'files/')
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname)
//   },
// });

//const upload = multer({ storage: storage })

const app = express();
const cors = require('cors'); 
const adminRoutes = require('./routes/admin');
const shopRoutes  = require('./routes/shop');
const authRoutes  = require('./routes/auth');
const loginRoutes  = require('./routes/login');
const contactusRoutes = require('./routes/contactus');
const patientFormRoutes = require('./routes/patientform');

const corsOptions = {
  credentials: true,
  origin: ['http://localhost:3000', 'http://localhost:80'] // Whitelist the domains you want to allow
};

app.use(cors(corsOptions));
//app.use(fileupload());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// app.use(
//   fileupload({
//     useTempFiles: true,
//     safeFileNames: true,
//     preserveExtension: true,
//     tempFileDir: `${__dirname}/public/files/temp`
//   })
// );

const port = 3001;

app.use(adminRoutes);
app.use(shopRoutes);
app.use('/auth', authRoutes);
app.use(loginRoutes);
app.use(contactusRoutes);
// app.use(upload.single('file'), patientFormRoutes);
app.use(patientFormRoutes)

app.use((req, res, next) => {
    res.status(404).send('Page not found');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})