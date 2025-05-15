const express = require('express');
const router = express.Router();
const { database } = require('../../Config/admindb');
const Players = require('../../models/models'); 
const bcrypt = require('bcrypt');
const saltRounds = 10; // You can use 10-12


module.exports.create = function (req, res) {
  const { username, email, password } = req.body; // ✅ Destructure these from req.body

  if (!username || !email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Allow strings and spaces
  const onlyAlphaSpaces = /^[A-Za-z\s]+$/;
  if (!onlyAlphaSpaces.test(username)) {
    return res.status(400).json({ message: 'Username can only contain letters and spaces' });
  }

  const checkSql = 'SELECT * FROM register WHERE email = ? OR username = ?';
  const checkParams = [email, username];

  try {
    database.query(checkSql, checkParams, async (error, results) => {
      if (error) {
        console.error('SQL Error:', error);
        return res.status(500).json({ error: 'Database query error' });
      }

      const emailExists = results.find(user => user.email === email);
      const usernameExists = results.find(user => user.username === username);

      if (emailExists) {
        return res.status(409).json({ message: `Email ${email} already exists.` });
      }

      if (usernameExists) {
        return res.status(409).json({ message: `Username ${username} already exists.` });
      }

      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const insertSql = 'INSERT INTO register (username, email, password) VALUES (?, ?, ?)';
      const values = [username, email, hashedPassword];

      database.query(insertSql, values, (err, result) => {
        if (err) {
          console.error('Insert Error:', err);
          return res.status(400).json({ error: 'Could not register admin' });
        }
else{
  return res.status(201).json({ message: 'Admin registered successfully' });
}
      });
    });
  } catch (err) {
    console.error('Unexpected Error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
};


/*GET ALL*///DOnE!!!!!!!!!
//i wanted to do paginations but this applications doesn't have that //
module.exports.readAll = function(req, res) {
  const sql = 'SELECT * FROM register'
 
   database.query(sql, (error, results) => {
     if (error) {
       console.error('Error fetching players');
       return res.status(500)
       .send(`Couldn't fetch players`);
     }
     else{
       res.status(200)
       .send(results);
     };
   })
 }
   

   



