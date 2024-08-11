const express = require("express");
const app = express();

const people = `Jacob Brazeal
Sarah Jochum
Elliot Lovegrove
Jeremiah England
Sang Bae
Asher Vincent
Stefan Jochum
Erin Crowley
John d'Amico
Mark Minnick
Alex Wang
Zach Garner
Lei Zhao
Gary Change
Yuting Duan`.split("\n");

const personality = people[(Math.random() * people.length) | 0];

app.get("/", (req, res) => {
  res.send(
    "You are speaking to " + personality + ". Do  you have any questions?"
  );
});

// Start the server on port 9000
app.listen(9000, () => {
  console.log("Server is running on http://localhost:9000");
});
