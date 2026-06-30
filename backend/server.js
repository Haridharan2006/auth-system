require("dotenv").config();
const app = require("./app");
const authRoutes = require("./routes/authRoutes");
const openidRoutes = require("./routes/openidRoutes");
const openidGroupMappingRoutes =
require("./routes/openidGroupMappingRoutes");
app.listen(5000, () => {
    console.log("Server running on port 5000");
});
app.use("/auth", authRoutes);

app.use("/openid", openidRoutes);

app.use(
    "/openid-group-mappings",
    openidGroupMappingRoutes
);