const express = require('express');
const urlRoutes = require('./routes/url.routes');
const app = express();
require('dotenv').config();

app.disable('x-powered-by');
  app.use(express.json({ limit: "5mb" }));
app.use('/', [urlRoutes]);

const PORT = process.env.PORT || 3000;
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === "development") {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

module.exports = app;