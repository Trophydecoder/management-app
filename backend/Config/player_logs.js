const mysql = require('mysql');

// Create a connection
const conn = mysql.createConnection({
  host: 'localhost',
  port: 3307, 
  user: 'root',
  password: '', 
  database: 'player_logs',
});

console.log('player_logs db connected')

module.exports = {
  database: conn
};
