/* --- code sent by Ryan from Sketch devops bootcamp - https://github.com/sketchdev/devops-bootcamp/blob/database-migrations/lib/db.js
const pgp = require('pg-promise')();
const cn = {
  host: process.env.PGHOST || process.argv[3],
  port: process.env.PGPORT || process.argv[4],
  database: process.env.PGDATABASE || process.argv[5],
  user: process.env.PGUSER || process.argv[6],
  password: process.env.PGPASSWORD || process.argv[7],
  schema: process.env.PGUSER || process.argv[6],
};
const db = pgp(cn);

module.exports = {
  pgp, db
};
*/



/* --- example from https://blog.logrocket.com/nodejs-expressjs-postgresql-crud-rest-api-example/
*/
const Pool = require('pg').Pool
const db = new Pool({
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});

module.exports = { db };
