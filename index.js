const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  weight: {
    type: String
  }
});

const Dog = mongoose.model('Dog', schema);

Dog
  .create({
    name: 'spot',
    age: 5,
    weight: '20 lbs'
  })
  .then(() => console.log('created!'));
