//const LoginUser = require("../models/loginUser");

// exports.getLoginUser = (req, res, next) => {
//     res.send(User.fetchUserName());
// }

const database = require('../util/database');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.postLoginUser = async (req, res, next) => {
    //const loginUser = new LoginUser(req.body.username, req.body.password);    
    //loginUser.login();
    console.log(req.body);
    const { username, password } = req.body;

    try {
        // Get a connection from the pool     
        
        const [rows] = await database.execute('SELECT * FROM users WHERE email = ?', [username]);       
    
        if (rows.length === 0) {
          return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
        }
    
        const user = rows[0];

        console.dir(user);
    
        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);

        console.log(`isMatch --> ${isMatch}`);
    
        if (!isMatch) {
          return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
        }
    
        // Payload for JWT token
        const payload = {
          user: {
            id: user.id,
            name: user.name
          }
        };
    
        // Generate JWT token
        jwt.sign(
          payload,
          'SEIZURECARESECRET',
          { expiresIn: '1h' },
          (err, token) => {
            if (err) throw err;
            res.json({ token });
          }
        );
    
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }   
}