const express = require('express');
const router = express.Router();
const {database} = require('../../Config/db');



/*GET ONE*/
module.exports.readOne = function(req, res) {
  const sql = 'SELECT * FROM players';
  let rawPhone = req.body.guardian_phone || req.params.guardian_phone;

  // Decode the phone if it came encoded %2B becomes +
  const decodedPhone = decodeURIComponent(rawPhone).trim();
  
  // Converting a local number starting with 0 to international SA format
  let formattedPhone = decodedPhone;
  if (formattedPhone.startsWith('0')) {
    formattedPhone = formattedPhone.replace(/^0/, '+27');
  }
  const validPhoneRegex = /^\+27\d{9}$/;
  if (!validPhoneRegex.test(formattedPhone)) {
    return res.status(400).send({ message: 'Phone number must start with +27 and be followed by 9 digits' });
  }
  
  
  


  // Proceed to search in database
  database.query(sql, (error, results) => {
    if (error) {
      console.log('Error fetching player:', error);
      return res.status(500).send('Couldn’t fetch player');
    }
  
    // Search for the matching player
    const matchedPlayer = results.find(player => player.guardian_phone === formattedPhone);
  
    if (matchedPlayer) {
      console.log('Found player with phone:',formattedPhone);
      res.status(200).send(matchedPlayer);
    } else {
      res.status(404).send({ message: `No player found with this number: ${formattedPhone}` });
    }
  });
}