const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/form');

const formSchema = mongoose.schema({
  name: String,
  email: String,
  password: String,
  address: {
    line1: String,
    line2: String,
    city: String,
    state: String,
    zip: Number,
  },
  credit: {
    cardnum: Number,
    expiration: String,
    cvv: Number,
    zip: Number,
  },
});

const Form = mongoose.model('Forms', formSchema);
