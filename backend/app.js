const express = require('express');
const cors = require('cors');

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

const app = express();

app.use(cors());
app.use(express.json());

app.use('/users', require('./routes/userRoutes'));
app.use('/groups', require('./routes/groupRoutes'));
app.use('/auth', require('./routes/authRoutes'));

app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec)
);

module.exports = app;