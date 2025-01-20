import mysql from "mysql2";
import config from "./config.js";

const db = mysql.createConnection({
  host: config.host,
  port: config.port,
  user: config.user,
  password: config.password,
  database: config.database,
});

db.connect((err) => {
  if (err) {
    console.log(err);
    db.destroy();
  }
});

export default db;
