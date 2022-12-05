// We've declared variables to establish the use of mySQL as our DB for this project, as well as establish a connection to our DB.
const mysql = require("mysql");
const express = require("express");
const fs = require("fs");
const app = express();

// Declared a variable that requires host, port, as well as username & password for mySQL before able to establish a secure connection.
const connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,
  user: "sofia",
  password: "sofia",
});

// If there is an error within the connection, it will console log an error message. 
// If not, it will console log a message to inform the connection was successful.
connection.connect((error) => {
  if (error) {
    console.log("Error connecting to the MySQL Database");
    return;
  }
  console.log("Connection established sucessfully");
});
connection.end((error) => {});

// Body parser, this will return all data entered into DB as JSON data within our application.
app.use(express.json());

// First party API to hold JSON data that gets returned from our DB
app.get("/", (req, res) => {
  fs.readFile("./index.html", (err, data) => {
    res.write(data);
    res.end();
  });
});

// Establishing which port/server the application will be ran on.
const port = process.env.PORT || 5000;

// Listening to make sure the connection is established, successful, and runs properly.
app.listen(port, () => console.log(`Listening on port ${port}`));
