const express = require('express');
const cors = require('cors');
const apiRouter = require('./routes')
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", apiRouter);
// app.use(express.static("client"));

app.listen(3000);