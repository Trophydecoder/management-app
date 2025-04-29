const express = require('express');
const router = express.Router();
const { database } = require('../../Config/admindb');
const bcrypt = require('bcrypt');
const saltRounds = 10; // You can use 10-12
const jwt = require('jsonwebtoken');
const { secret, expiresIn } = require('../../Config/jwt');



//post
module.exports.create = function (req, res) {
  const checkSql = 'SELECT * FROM register WHERE email = ?'; 
  const check = [
    req.body.email,
    req.body.username
];

  // Check if email already exists
  database.query(checkSql, check, async (error, results) => {
    if (error) {
      console.log('error');
      return res.status(500).send('Couldn’t check admin');
    }

    // If no user is found with that email,
    if (results.length === 0) {
      return res.status(404).
      send({ message: `Incorrect username or password` });
    }
    {
      if (req.body.username !== founduser.username ){
          return res.status(404).
          send({ message: `Incorrect username or password` });
      }
    // If email exists, compare the hashed password
    const founduser = results[0]; // fetch first user with that email by index which start with  0 

    const passwordMatches = await bcrypt.compare(req.body.password, founduser.password);
//if the password does not match 
    if (!passwordMatches) {
      return res.status(404).
      send({ message: `Incorrect password for email & username of ${req.body.email} and ${req.body.username}.` });
    }
 
    else{
      const tokenPayload = {
        id: founduser.id,
        email: founduser.email,
        username: founduser.username
      };
      const token = jwt.sign(tokenPayload, secret, { expiresIn });
      
    return res.status(200).
    send({ message: `Successfully logged in admin with email and username  :  ${founduser.email} and ${req.body.username}`, token });
     token
    }
}
    
  });
};
