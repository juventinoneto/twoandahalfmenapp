const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const swaggerUi = require("swagger-ui-express");
const apiDoc = require('./docs/apidocumentation.json');

const indexRouter = require('./routes/index');
const characterRouter = require('./routes/character');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(apiDoc));
app.use('/character', characterRouter);

module.exports = app;
