const express = require('express');
const router = express.Router();
const {database} = require('../../Config/db');
const Players = require('../../models/models');



/* POST*/
module.exports.create = function (req, res) {
  const checkSql = 'SELECT * FROM players WHERE id = ? OR guardian_phone = ?';
  const insertSql = 'INSERT INTO players (id, firstname, lastname, position, age, guardian_name, guardian_phone) VALUES (?, ?, ?, ?, ?, ?, ?)';


  checking =[
    req.body.id, 
    req.body.guardian_phone
  ]
  // check if player already exists by ID or guardian_phone
  database.query(checkSql,checking , (error, results) => {
    if (error) {
      console.log('Error checking existing player:', error);
      return res.status(500).send('Couldn’t check existing player');
    }

    const playerWithSameId = results.find(player => player.id === req.body.id);
    if (playerWithSameId) {
      return res.status(409).
      send({ message: `Player with ID ${req.body.id} already exists. CANNOT ADD.` });
    }

    const playerWithSamePhone = results.find(player => player.guardian_phone === req.body.guardian_phone);
    if (playerWithSamePhone) {
      return res.status(409).
      send({ message: `Player with Guardian's phone number ${req.body.guardian_phone} already exists. CANNOT ADD.` });
    }

    // Insert new player
    const values = [
      req.body.id,
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

      res.status(201).
      send({ message: 'Player added successfully' });
    });
  });
};

















/*GET ALL*/
//i wanted to do paginations but this applications doesn't have that //
module.exports.readAll = function(req, res) {
   const sql = 'SELECT * FROM players ORDER BY id'
  
    database.query(sql, (error, results) => {
      if (error) {
        console.error('Error fetching players');
        return res.status(500)
        .send('Couldnt fetch players');
      }
      else{
        res.status(200)
        .send(results);
      };
    })
  }
    

    


/* PUT*/
/* PUT */
module.exports.Update = function (req, res) {
  const checkSql = 'SELECT * FROM players WHERE id = ? AND guardian_phone = ?';
  const updateSql = `
    UPDATE players 
    SET firstname = ?, lastname = ?, position = ?, age = ?, guardian_name = ?, guardian_phone = ? 
    WHERE id = ? AND guardian_phone = ?
  `;

  const paramId = Number(req.params.id);
  const { firstname, lastname, position, age, guardian_name, guardian_phone } = req.body;

  // First, check if the player exists with both ID and guardian_phone
  database.query(checkSql, [paramId, guardian_phone], (error, results) => {
    if (error) {
      console.error('Error checking player ID and guardian phone:', error);
      return res.status(500).send('Couldn’t check player info');
    }

    if (results.length === 0) {
      return res.status(404).send({ message: `Player with ID ${paramId} and guardian phone ${guardian_phone} not found.` });
    }
const findGuardian = guardian_phone.find(phone => phone.guardian_phone == guardian_phone)
if(findGuardian){
  console.error('cant accept duplicates guardian names', error);
  return res.status(500).send('cant accept duplicates guardian names');
}
    // Now update
    const updatedPlayer = [
      firstname,
      lastname,
      position,
      age,
      guardian_name,
      guardian_phone,
      paramId,
   
    ];

    database.query(updateSql, updatedPlayer, (error, updateResult) => {
      if (error) {
        console.error('Error updating player:', error);
        return res.status(500).send('Couldn’t update player');
      }

      return res.status(200).send({ message: 'Player updated successfully' });
    });
  });
};

















/* DELETE ONE*/
module.exports.deleteOne = function (req, res) {
  let id = Number(req.params.id);
  const checkSql = 'SELECT * FROM players WHERE id = ?';
  const Sql = 'DELETE FROM players WHERE id = ?';

  // First, check if the player exists if player exists we go delete
  database.query(checkSql, id, (error, Results) => {
    if (error) {
      return res.status(500).send('Error checking player existence');
    }

    if (Results.length === 0) {
      // if results legnth equals 0 which means it doesn't exist we send a resopond
      return res.status(404).send(`Player with ID ${id} does not exist`);
    }

    // if results length is not equal to 0 which means Player exists, proceed to delete
    database.query(Sql, id, (error, results) => {
      if (error) {
        return res.status(500).send('Error, can’t delete player');
      }
      if(results){
        res.status(200).send(`Successfully deleted player with ID: ${id}`);
      }
      else{
        res.status(404).send(`player with id ${id} dont exist`);
      }

    });
  });
};

  
  
    
    
 

 