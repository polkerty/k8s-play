const express = require("express");
const app = express();


app.get("/", (req, res) => {
  const command = req.query.command;
  const data = req.query.data;
  res.send(
    `Got command: ${command}; got data: ${data}`
  );
});

// Start the server on port 9000
app.listen(9000, () => {
  console.log("Server is running on http://localhost:9000");
});
