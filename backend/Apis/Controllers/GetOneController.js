const express = require('express');
const router = express.Router();
const {database} = require('../../Config/db');



/*GET ONE*/
module.exports.readOne = function(req, res) {
    const sql = 'SELECT * FROM players ORDER BY id';
   checking = req.body.guardian_phone

    database.query(sql,checking, (error, results) => {
      if (error) {
        console.log('Error fetching player');
        return res.status(500)
        .send('Couldn’t fetch player');
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
      else {
        const findphone = results.find(player => player.guardian_phone === req.body.guardian_phone);
        if (findphone) {
          res.status(200).send(findphone); 
        } else {
          res.status(404).send({ message: `No player found with This number ${req.body.guardian_phone}` });
        }
      }
    });
  };
  
 