const express = require('express');
const router = express.Router();
const { database } = require('../../Config/admindb');
const Players = require('../../models/models'); 
const bcrypt = require('bcrypt');
const saltRounds = 10; // You can use 10-12


module.exports.create = function (req, res) {
  const checkSql = 'SELECT * FROM register WHERE username = ? OR email = ?';
  const Sql = 'INSERT INTO register (username, email, password) VALUES (?, ?, ?)';

  const check = [
    req.body.username, 
    req.body.email,
]
  // Check if username or email already exists
  database.query(checkSql,check, async (error, results) => {
    if (error) {
        console.log('SQL Error:', error); 
      return res.status(500).send('Couldn’t check admin');
    }
    let usernameFind = results.find(user => user.username === req.body.username);
    if (usernameFind) {
      return res.status(404)
      .send({ message: `Username ${req.body.username} already exists.` });
    }

    let emailFind = results.find(user => user.email === req.body.email);
    if (emailFind) {
      return res.status(404)
      .send({ message: `Email  ${req.body.email} already exists.` });
    }

    
    
    try {
        // Hashing the password
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
  
        // //what we gonna add
        const values = [
          req.body.username,
          req.body.email,
          hashedPassword,
        ];
    
        // Insert new admin
        database.query(Sql, values, (error, results) => {
          if (error) {
            console.log('Error registering admin');
            return res.status(500).
            send('Couldn’t register new admin');
          }
            if(results){
                return res.status(200).
                send({ message: 'Admin registered successfully' });
            }
      
        });
      } catch (error) {
        console.error("Error hashing password:", error);
        return res.status(500).send("Internal server error during password hashing");
      }
    });
  };