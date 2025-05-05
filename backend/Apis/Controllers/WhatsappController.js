// routes/whatsapp.js

const express = require('express');
const axios = require('axios');
const router = express.Router();
const { database } = require('../../Config/db');

// POST /api/notify
module.exports.post = async function (req, res){
  const { guardian_phone, firstname, lastname, action } = req.body;

  if (!guardian_phone || !firstname || !lastname || !action) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const checkSql = 'SELECT * FROM players WHERE guardian_phone = ? AND firstname = ? AND lastname = ?';
  const checkParams = [guardian_phone, firstname, lastname];

  database.query(checkSql, checkParams, async (error, results) => {
    if (error) {
      console.log('Error checking existing player:', error);
      return res.status(500).send('Couldn’t check existing player');
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'Player does not exist' });
    }

    let message = '';
    if (action === 'dropped_off') {
      message = `Hello! Your child, ${firstname} ${lastname}, has been DROPPED OFF at the soccer academy.`;
    } else if (action === 'picked_up') {
      message = `Hello! Your child, ${firstname} ${lastname}, has been PICKED UP from the soccer academy.`;
    } else {
      return res.status(400).json({ message: 'Invalid action' });
    }

    try {
      // Example UltraMsg API usage — replace this with your real instance + token
      const response = await axios.post('https://api.ultramsg.com/instanceXXXX/messages/chat', {
        token: '',
        to: guardian_phone,
        body: message,
      });

      const logSql = `INSERT INTO player_logs (firstname, lastname, guardian_phone, action_type, message, timestamp)
VALUES (?, ?, ?, ?, ?, NOW())
    `;
    
    database.query(logSql,[firstname, lastname, guardian_phone, action, message],
      (err, result) => {
        if (err) console.error('DB log error:', err);
      }
    );
    

      res.status(200).json({ message: 'Message sent and logged', response: response.data });

    } catch (error) {
      console.error(error.response?.data || error.message);
      res.status(500).json({ message: 'Failed to send WhatsApp message' });
    }
  });
};


