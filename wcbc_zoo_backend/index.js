'use strict';

const express = require('express');
const app = express();
const PORT = 22131;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});