const express = require("express");
const noteRouter = require("./routes/noteRoutes");
const cors = require("cors");

const app = express();

// Middleware for parsing JSON in the request body
app.use(express.json());

app.use(cors());

// Routes
app.use("/api/v1/notes", noteRouter);

app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "error",
    message: `Can't find ${req.originalUrl} on this server!`,
  });
});

module.exports = app;
