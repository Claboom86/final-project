"use strict";
const express = require("express");
const app = express();
const food = require("./routes.js");

app.use(express.json());
app.use(express.static("./"));
app.use("/",food);

app.listen(3000, () => {
    console.log("Server is on port 3000");
});