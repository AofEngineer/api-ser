var express = require("express");
var cors = require("cors");
var app = express();
var mysql = require("mysql2");
require("dotenv").config();
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

app.use(cors());

app.get("/users", (req, res) => {
  pool.query("SELECT * FROM attractions", (req, rows) => {
 if (err) return res.status(500).json({ message: "Not excute" });
    res.json(rows);
  });
});
app.listen(5000, () => {
  console.log("web server listening 5000");
});
