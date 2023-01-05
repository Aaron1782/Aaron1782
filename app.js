
const port = 3000 || process.env.PORT;
const express = require("express");
const app = express();
const bodyParser = require("body-parser");


// Serve up public folder as a static resource
app.use(express.static("public"));

app.get("/", (req, res) => {

 
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  res.send("Post request sent");
});

app.listen(port, () => {
  console.log("Now listening on port 3000");
});