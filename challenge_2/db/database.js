const mongoose = require('mongoose');

const formSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  addressLineOne: String,
  addressLineTwo: String,
  city: String,
  state: String,
  zip: Number,
  credit: Number,
  expiration: String,
  cvv: Number,
  billZip: Number,
});

const Form = mongoose.model('Forms', formSchema);

const save = (obj) => {
  const data = new Form(obj);
  data.save();
};

module.exports.db = {
  mongoose,
  save,
};
