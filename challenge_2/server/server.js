const express = require('express');
const path = require('path');
const db = require('../db/database');
const bodyParser = require('body-parser');

const app = express();

db.db.mongoose.connect('mongodb://localhost/forms');

app.use(express.static(path.join(__dirname, '../client/dist/')));
app.use(bodyParser.json());

app.post('/checkout', (req, res) => {
  db.db.save(req.body);
  res.sendStatus(200);
});

app.listen(3500, () => console.log('listening on port 3500'));
