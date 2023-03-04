//create express instance
const express = require("express");
const app = express();

// create handler function
app.get("/", (request, response) => {
  response.send("Home Page");
});

app.get("/about", (request, response) => {
  response.send("About Page");
});
module.exports = app;
