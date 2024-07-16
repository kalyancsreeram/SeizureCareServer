//const LoginUser = require("../models/loginUser");

// exports.getLoginUser = (req, res, next) => {
//     res.send(User.fetchUserName());
// }

const db = require('../util/database');

exports.postLoginUser = async (req, res, next) => {    
  
    const { email, password } = req.body;   
   
    const sql = 'SELECT * FROM users WHERE email = ?';

    try {
        const [result] = await db.execute(sql, [email]);
        if (result.length === 0) return res.status(404).send('No user found.');

        const user = result[0];
        const passwordIsValid = bcrypt.compareSync(password, user.password);
        if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
       
        const token = jwt.sign({ name: user.name, email: user.email }, 'seizurecaresecret');

        res.status(200).send({ auth: true, token: token });
    } catch (err) {
        res.status(500).send('Error on the server.');
    }
   
}