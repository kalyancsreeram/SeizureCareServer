
const database= require('./../util/database');
const bcrypt = require('bcryptjs');

exports.postSignup = async (req, res, next) => {     
    const { email, password, name } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 8);
    console.log(req.body);
    console.log('I am at signup');
    const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    try {
        console.log(`${name} : ${email} : ${password}`);
        await database.execute(sql, [name, email, hashedPassword]);
        res.status(200).send({ message: 'User registered successfully!' });
    } catch (err) {
        console.log(`err --> ${err}`);
        res.status(500).send('Error on the server.');
    }
    
}