const express = require('express');
const { multiply } = require('./lib/numbers');
const { firstCharacters } = require('./lib/strings');

const app = express();

app.use(express.json());

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

/* app.get('/strings/first-characters/:string', (req, res) => {
  res.status(200).send({ result: `${req.params.string[0]}` });
}); */

app.get('/strings/first-characters/:string', (req, res) => {
  res.status(200).send({ result: firstCharacters(req.params.string, req.query.length) });
});

// NUMBERS

app.get('/numbers/add/:a/and/:b', (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);
  if (!a && !b) {
    res.status(400).send({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: a + b });
  }
});

app.get('/numbers/subtract/:a/from/:b', (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);

  if (!a && !b) {
    res.status(400).send({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).send({ result: b - a });
  }
});
// THE TWO TESTS ABOVE COULD BE ACHIEVED BY CALLING ON NUMBERS METHODS?????
// LOOK INTO THIS!

app.post('/numbers/multiply', (req, res) => {
  res.status(200).send({ result: multiply(req.body.a, req.body.b) });
});

module.exports = app;
