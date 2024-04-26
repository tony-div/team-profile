const dotenv = require('dotenv');
const app = require('./api/index');
const db = require('./utils/dbConnect');

dotenv.config({ path: './.env' });

db.connect(process.env.DBNAME, process.env.DBUSER, process.env.DBPASSWORD, process.env.DBHOST, process.env.DBPORT);
const port = process.env.PORT;
app.listen(port, () => console.log(`listening on port ${port}`));

