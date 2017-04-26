const express = require('express');
const app = express();

app.use(require('express-dev-autoreload')({}));
app.use(express.static('.'));

app.listen(8081, function () {
  console.log('http://localhost:8081')
})