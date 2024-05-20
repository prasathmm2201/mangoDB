const express = require("express")
const mongoose = require('mongoose');
const PersonFunction = require("./router");
const Person = require("./schema/person");
const app = express();
const PORT = 5000
app.set("port", PORT);
app.use(express.json({ limit: "20mb", extended: true }));
app.use(
  express.urlencoded({ limit: "20mb", extended: true, parameterLimit: 50000 })
);
app.get("/", async (req, res) => {
    const users = await Person.find()
    res.status(200).send(users);

});
app.post('/create',async(req,res)=>{
    await PersonFunction()
    res.status(200).send("created");

})
app.listen(PORT, console.log("Server is running at port : " + PORT));
// Connect to MongoDB
mongoose.connect('mongodb+srv://organization:1yCYavlr2rWwGqSV@cluster0.hyekw5n.mongodb.net/?retryWrites=true&w=majority');

const db = mongoose.connection;

// Handle connection events
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
