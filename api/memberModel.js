const db = require('./../utils/dbConnect');

exports.getAllMembers = async () => {
  const connection = db.getConnection();
  const [results] = await connection.promise().query(
    'SELECT * FROM `Students`'
  );

  return results;
}