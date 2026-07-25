require("dotenv").config();
const app = require("./app");
const authRoutes = require("./routes/authRoutes");
const openidRoutes = require("./routes/openidRoutes");
const openidGroupMappingRoutes =
require("./routes/openidGroupMappingRoutes");
const ldapRoutes =
require("./routes/ldapRoutes");
app.listen(5000, () => {
    console.log("Server running on port 5000");
});
app.use("/auth", authRoutes);

app.use("/openid", openidRoutes);
app.use(
    "/ldap",
    ldapRoutes
);

app.use(
    "/openid-group-mappings",
    openidGroupMappingRoutes
);