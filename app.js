'use strict';

const express = require('express');

const PORT = 3000;

const app = express();

app.set('view engine', 'jade');

app.get('/', function (req, res) {
  res.render('index', { title: 'Hello World!'} );
});

app.listen(PORT);
console.log('Running app on http://localhost:' + PORT);
