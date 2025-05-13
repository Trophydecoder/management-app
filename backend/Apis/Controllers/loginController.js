const express = require('express');
const router = express.Router();
const { database } = require('../../Config/admindb');
const bcrypt = require('bcrypt');
const saltRounds = 10; // You can use 10-12
const jwt = require('jsonwebtoken');
const { secret, expiresIn } = require('../../Config/jwt');



//post
module.exports.create = function (req, res) {
  const checkSql = 'SELECT * FROM register WHERE email = ? and username =? '; 
  const check = [
    req.body.email,
    req.body.username
];

   

//we only allow space and string for USERNAME you must not add numbers//
const onlystringandspaceex = /^[A-Za-z\s]+$/; //only allows string and space
if (!onlystringandspaceex.test(req.body.username)) {
  console.log('for names ,Only allows alphabetic letters');
      return res.status(400).send({
        message: 'for names ,Only allows alphabetic letters',
      })
    }
  // Check if email already exists
  database.query(checkSql, check, async (error, results) => {
    if (error) {
      console.log('error');
      return res.status(500).send('Couldn’t check admin');
    }

   


    const charactersallowed = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d\S]{8,}$/;
    if (!charactersallowed.test(req.body.password)) {
      console.log('Password must include a capital letter, a number, a special character, and be at least 8 characters long.');
      return res.status(400).send({
        message: 'Password must include a capital letter, a number, a special character, and be at least 8 characters long.',
      });
    }
    const founduser = results[0]; 
     // If no user is found with that email,
     if (results.length === 0) {
      console.log('user dont exist')
      return res.status(404).
      send({ message: `User not exist , Register user` });
    }
     // If email exists, compare the hashed password

   {
    if (req.body.username !== founduser.username ){
        return res.status(400).
        send({ message: `Incorrect username or password` });
    }
// fetch first user with that email by index which start with  0 
    const passwordMatches = await bcrypt.compare(req.body.password, founduser.password);
//if the password does not match 
    if (!passwordMatches) {
      return res.status(400).
      send({ message: `Incorrect password for email & username of ${req.body.email} and ${req.body.username}.` });
    }
 
    else{
      const tokenPayload = {
        id: founduser.id,
        email: founduser.email,
        username: founduser.username
      };
      const token = jwt.sign(tokenPayload, secret, { expiresIn });
      console.log('login recieved you logged in')
    return res.status(200).
    send({ message: `Successfully logged in admin with email and username  :  ${founduser.email} and ${req.body.username}`, token });
     token
     
    }
}
    
  });
};
