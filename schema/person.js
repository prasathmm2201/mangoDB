const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number,
  email: String,
});

// Create a Mongoose model based on the schema
const Person = mongoose.model('Person', personSchema);

// Export the model for use in other parts of your application
module.exports = Person;
