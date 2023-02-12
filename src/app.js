const express = require('express');

const app = express();

app.get('/strings/hello/:string', (req, res) => {
  res.status(200).json({ result: `Hello, ${req.params.string}!` });
});

app.get('/strings/upper/hello', (req, res) => {
  res.status(200).send({ result: 'HELLO' });
});

module.exports = app;
