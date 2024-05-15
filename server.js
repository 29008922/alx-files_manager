// server.js

const express = require('express');
const router = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 5000;

// Load all routes from the file routes/index.js
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
