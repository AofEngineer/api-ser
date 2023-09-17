const express = require("express");
const cors = require("cors");
const app = express();
const mysql = require("mysql2");
require("dotenv").config();
const port = 5000;
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

app.use(cors());

app.get("/users", (req, res) => {
  pool.query("SELECT * FROM attractions", (req, result) => {   
    res.status(200).json({ result });
  })
  
});
app.listen(port, () => {
  console.log(`Server Listen on port ${port}`);
});
