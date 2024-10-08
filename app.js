//Creating a node server using Express framework
const express = require("express");
const bodyParser = require("body-parser");
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

const db = require("./util/database");

const app = express();
const cors = require("cors");
// const adminRoutes = require('./routes/admin');
const testRoutes = require("./routes/test");
// const authRoutes  = require('./routes/auth');
const loginRoutes = require("./routes/login");
const contactusRoutes = require("./routes/contactus");
const patientFormRoutes = require("./routes/patientform");
const signupRoutes = require("./routes/signup");

const corsOptions = {
  credentials: true,
  origin: [
    "http://localhost:3000",
    "http://localhost:80",
    "https://seizurecarenet.com",
    "http://localhost:3001",
    "https://localhost:3001",
    "https://seizurecarenet.in",
  ], // Whitelist the domains you want to allow
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

// app.use(adminRoutes);
app.use(testRoutes);
// app.use('/auth', authRoutes);
app.use(loginRoutes);
app.use(contactusRoutes);
// app.use(upload.single('file'), patientFormRoutes);
app.use(patientFormRoutes);
app.use(signupRoutes);

app.use((req, res, next) => {
  res.status(404).send("Page not found");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
