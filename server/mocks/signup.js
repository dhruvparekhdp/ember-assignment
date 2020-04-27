'use strict';

module.exports = function(app) {
  const express = require('express');
  let signupRouter = express.Router();

  signupRouter.post('/', function(req, res) {
    const successResponse = {success: true};
    res.send(successResponse).status(201).end();
  });

  app.use('/signup', signupRouter);
};
