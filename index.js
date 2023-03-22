const express = require("express");
const dotenv = require("dotenv").config;

const port = process.env.PORT || 4000;
const app = express();

app.use("/api/jobs", require("./routes/jobsRoutes"));

app.listen(port, () => console.log(`Server running on port ${port}`));
