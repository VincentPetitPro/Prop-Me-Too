const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const port = 8081;

const client = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "159753",
    database: "prop-me-too"
});
client.connect(err => {
    if (err) {
        console.log("Error : " + err);
    }
    console.log("MySQL Connected...");
});

const app = express();
app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log("Connection established on port " + port);
});

// Only to check if axios/express work
app.get("/api", (req, res) => {
    console.log("Axios & Express ready");
});

app.get("/api/nourriture", (req, res) => {
    let sql = "SELECT * FROM services WHERE description = 'Nourriture'";
    client.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});
