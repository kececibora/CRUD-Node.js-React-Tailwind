const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "bana1995+6",
  database: "crud_contact",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/get", (req, res) => {
  const sqlGet = "SELECT * FROM contact_db";
  db.query(sqlGet, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.get("/", (req, res) => {
  // const sqlInsert =
  //   "INSERT INTO contact_db (name,email,contact) VALUES('burak','boraizzet0@gmail.com',5546708552)";
  // db.query(sqlInsert, (err, result) => {
  //   console.log("error", err);
  //   console.log("result", result);
  //   res.send("Hello Express!");
  // });
});

app.listen(5000, () => {
  console.log("Server is Running port 5000");
});
