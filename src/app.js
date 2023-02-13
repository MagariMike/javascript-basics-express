const express = require('express');

const app = express();

app.get('/strings/hello/:string', (req, res) => {
  res.status(200).json({ result: `Hello, ${req.params.string}!` });
});

app.get('/strings/upper/:string', (req, res) => {
  res.status(200).send({ result: `${req.params.string}`.toUpperCase() });
});

app.get('/strings/lower/:string', (req, res) => {
  res.status(200).send({ result: `${req.params.string}`.toLowerCase() });
});

app.get('/strings/first-characters/:string', (req, res) => {
  res.status(200).send({ result: `${req.params.string[0]}` });
});

module.exports = app;
