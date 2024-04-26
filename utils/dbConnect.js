const mysql = require('mysql2');
let connection;
exports.connect = async (name, username, password, host, port) => {
  connection = await mysql.createConnection({
    database: name,
    port: port,
    password: password,
    host: host,
    user: username
  });
  console.log('db connected successfuly')
  return connection;
}

exports.getConnection = () => {
  if(connection)
    return connection;
  console.log('connection is undefined')
}