//import the library
const mongoose= require('mongoose');

//to connect the connection
mongoose.connect('mongodb://localhost/contact_list_db');

//to check that we are connected or not
const db= mongoose.connection;

//error
db.on('error',console.error.bind(console,"error connecting to db"));

//successful
db.once('open',function(){
    console.log("yah! we successfully connected to our db");
});