const express = require('express');

const app = express();

// STRINGS

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

app.get('/strings/first-characters/?result=sd32fg45', (req, res) => {
  res.status(200).send({ result: `${req.query.length}` });
});

// NUMBERS

app.get('/numbers/add/:a/and/:b', (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);
  res.status(200).json({ result: a + b });
  /* if (typeof a && b === 'number') {
    res.status(200).json({ result: a + b });
  } else {
    res.status(200).send({ result: 'Parameters must be valid numbers.' });
  } */
});

app.get('/numbers/subtract/:a/from/:b', (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);
  res.status(200).send({ result: a - b });
});
module.exports = app;
