const express = require("express");
const dotenv = require("dotenv").config();
var cors = require('cors')
const { errHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')

connectDB()
const port = process.env.PORT || 4000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

app.use("/api/jobs", require("./routes/jobsRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errHandler)

app.listen(port, () => console.log(`Server running on port ${port}`));
