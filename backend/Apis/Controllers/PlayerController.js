const express = require('express');
const router = express.Router();
const {database} = require('../../Config/db');
const Players = require('../../models/models');



/* POST*///DOnE!!!!!!!!!
module.exports.create = function (req, res) {
  const checkSql = 'SELECT * FROM players WHERE guardian_phone = ?';
  const insertSql = 'INSERT INTO players (firstname, lastname, position, age, guardian_name, guardian_phone) VALUES ( ?, ?, ?, ?, ?, ?)';


  checking =[
    req.body.guardian_phone
  ]
  // check if player already exists by ID or guardian_phone
  database.query(checkSql,checking , (error, results) => {
    if (error) {
      console.log('Error checking existing player:', error);
      return res.status(500).send('Couldn’t check existing player');
    }

    
    if ( req.body.guardian_phone) {
      const trimmedNumber = req.body.guardian_phone.trim();
      const onlynumbersEx = /^(0|\+27)\d+$/
      if (!onlynumbersEx.test(trimmedNumber)) {

        return res.status(409).
        send({ message: `invalid cellnumber` });
         // Stop function if phone is invalid(something i wasnt aware of)
      }
    
      if (req.body.guardian_phone.startsWith('0')) {
        req.body.guardian_phone = req.body.guardian_phone.replace(/^0/, '+27');
      }
    }

    const playerWithSamePhone = results.find(player => player.guardian_phone === req.body.guardian_phone);
    if (playerWithSamePhone) {
      return res.status(409).
      send({ message: `Player with Guardian's phone number ${req.body.guardian_phone} already exists. CANNOT ADD.` });
    }

    // Insert new player
    const values = [

      req.body.firstname,
      req.body.lastname,
      req.body.position,
      req.body.age,
      req.body.guardian_name,
      req.body.guardian_phone
    ];

const onlystringex = /^[A-Za-z\s]+$/; //only allows string
const bodyinputs = [
  req.body.firstname,
  req.body.lastname,
  req.body.position,
  req.body.guardian_name,
];

const hasInvalid = bodyinputs.some(things => !onlystringex.test(things));

if (hasInvalid) {
  return res.status(400).
  send({ message: 'for names ,postion ,Only allows alphabetic strings' });
}
const onlynumbersandplus = /^\+(\d{1,12})$/;  
if (!onlynumbersandplus.test(req.body.guardian_phone)) {
  return res.status(400)
    .send({ message: 'Phone number must start with "+" followed by numbers only and 12 numbers following' });
}
    if(req.body.guardian_phone.length > 12){
      console.log('Too many numbers for a phone number');
      return res.status(400).
      send({ message: 'Too many numbers for a phone number' });
    }

    database.query(insertSql, values, (error, insertResults) => {
      if (error) {
        console.log('Error inserting new player:', error);
        return res.status(500).send('Couldn’t create new player');
      }

      res.status(200).
      send({ message: 'Player added successfully' });
    });
  });
};

















/*GET ALL*///DOnE!!!!!!!!!
//i wanted to do paginations but this applications doesn't have that //
module.exports.readAll = function(req, res) {
   const sql = 'SELECT * FROM players ORDER BY id'
  
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
    

    


/* PUT*/
module.exports.Update = function (req, res) {
  const updateSql = `
    UPDATE players 
    SET firstname = ?, lastname = ?, position = ?, age = ?, guardian_name = ?, guardian_phone = ? 

  `;

  const {  firstname, lastname, position, age, guardian_name, guardian_phone } = req.body;

  if ( !guardian_phone) {
    return res.status(400).send({ message: 'Player ID and guardian phone are required' });
  }

  // Format and validate phone
  let formattedPhone = guardian_phone.trim();
  if (formattedPhone.startsWith('0')) {
    formattedPhone = formattedPhone.replace(/^0/, '+27');
  }

  const validPhoneRegex = /^\+27\d{9}$/;
  if (!validPhoneRegex.test(formattedPhone)) {
    return res.status(400).send({ message: 'Invalid phone number. Must start with +27 and be 9 digits long.' });
  }

  // Check if the phone number is used by another player
  const duplicateSql = 'SELECT * FROM players WHERE guardian_phone = ? ';
  database.query(duplicateSql, [formattedPhone], (err, results) => {
    if (err) {
      console.error('Error checking for duplicate phone:', err);
      return res.status(500).send('Database error');
    }

    if (results.length < 0) {
      return res.status(409).send({ message: 'Phone number is already used by another player.' });
    }

    // Perform the update
    const updateValues = [
      firstname,
      lastname,
      position,
      age,
      guardian_name,
      formattedPhone,

    ];

    database.query(updateSql, updateValues, (error, result) => {
      if (error) {
        console.error('Error updating player:', error);
        return res.status(500).send('Failed to update player');
      }

      if (result.affectedRows === 0) {
        return res.status(404).send({ message: 'Player not found' });
      }

      return res.status(200).send({ message: 'Player updated successfully' });
    });
  });
};














/* DELETE ONE*/
module.exports.deleteOne = function (req, res) {
  let phone = decodeURIComponent(req.params.guardian_phone).trim();

  if (phone.startsWith('0')) {
    phone = phone.replace(/^0/, '+27');
  }

  const checkSql = 'SELECT * FROM players WHERE guardian_phone = ?';
  const deleteSql = 'DELETE FROM players WHERE guardian_phone = ?';

  database.query(checkSql, [phone], (err, results) => {
    if (err) return res.status(500).send('Error checking player');

    if (results.length === 0) {
      return res.status(404).send(`No player with phone: ${phone}`);
    }

    database.query(deleteSql, [phone], (err) => {
      if (err) return res.status(500).send('Delete error');
      res.status(200).send(`Deleted player with phone: ${phone}`);
    });
  });
};
  
    
    
 

 