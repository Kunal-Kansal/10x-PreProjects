const express = require("express");
const mongoose = require("mongoose");
const bodyparse = require("body-parser");
const PORT = 8080
const app = express();
const userRoutes = require("user");
const offerRoutes = require("offer");
mongoose.connect("mongodb://localhost:27017/user").then(() => {
    console.log("successfully connected to database");
}).catch(() => {
    console.log("failed to connect to database");
});
app.use(bodyparse.json());
app.listen(PORT, () => {
    console.log("server started at " + PORT)
});
app.use("/user", userRoutes);
app.use("/offer", offerRoutes);
