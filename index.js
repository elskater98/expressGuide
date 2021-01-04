const express = require('express')
const app = express()
const port = 3000

/* Mongodb Connection*/
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/database',{useNewUrlParser: true,useFindAndModify:false,useCreateIndex:true,useUnifiedTopology:true})

// Check connection
const db = mongoose.connection;
db.on('error',console.error.bind(console,'Failed connection.'));
db.once('open',function () {
    console.log("Successfully connection.")
});

/*Server*/
app.listen(port , () => {
  console.log("Hello World!")
})