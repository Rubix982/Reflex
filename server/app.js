const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const indexRouter = require('./routes/index');
const middleware = require('./middleware/index');
const sqlScript = require('./db/mysql/sqlScript');
const MONGOOSE_CONNECTOR = require('./db/mongo/connection');

const app = express();
require('dotenv').config();

MONGOOSE_CONNECTOR.connect();
sqlScript.createAndInsert();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(cookieParser());
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use('/', indexRouter);
app.use(middleware.notFound);
app.use(middleware.onError);

module.exports = app;
