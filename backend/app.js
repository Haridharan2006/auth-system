const express = require('express');
const cors = require('cors');
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");
const app = express();
const openidGroupMappingRoutes = require("./routes/openidGroupMappingRoutes");
app.use(cors());
app.use(express.json());
app.use('/users', require('./routes/userRoutes'));
app.use('/groups', require('./routes/groupRoutes'));
app.use("/group-mappings",require("./routes/groupMappingRoutes"));
app.use("/openid-providers",require("./routes/openidProviderRoutes"));
app.use("/openid",require("./routes/openidRoutes"));
app.use("/openid-group-mappings",openidGroupMappingRoutes);
app.use('/auth', require('./routes/authRoutes'));
app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerSpec));

module.exports = app;