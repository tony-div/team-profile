const express = require('express');
const memberController = require('./memberController');
const app = express();
app.use(express.json());

app.use(express.static('./static'));

app
  .route('/api/members')
  .get(memberController.getAllMembers)

module.exports = app;