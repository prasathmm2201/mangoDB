const Person = require("../schema/person");

const PersonFunction=()=>{
    // Create a new person
const newPerson = new Person({
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    email: 'john.doe@example.com',
  });
  
  // Save the person to the database
  newPerson.save()
    .then((result) => {
      console.log('New person saved:', result);
    })
    .catch((error) => {
      console.error('Error saving person:', error);
    });
}
module.exports = PersonFunction;
