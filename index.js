const express = require('express')
const bodyParser = require('body-parser');
const app = express()

app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

const port = 3000
/* Mongodb Connection*/
const mongoose = require('mongoose')

//mongoose.connect('mongodb://mongo:27017/database',{useNewUrlParser: true,useFindAndModify:false,useCreateIndex:true,useUnifiedTopology:true}) 
mongoose.connect('mongodb://localhost:27017/database',{useNewUrlParser: true,useFindAndModify:false,useCreateIndex:true,useUnifiedTopology:true})

// Check connection
const db = mongoose.connection;
db.on('error',console.error.bind(console,'Failed connection.'));
db.once('open',function () {
    console.log("Successfully connection.")
});

// Schemas

const CPU = require('./schemas/cpu')


// GET
app.get('/cpu',async (req,res) => {
    const cpu_list = await CPU.find({});
    res.send({"cpus":cpu_list});
})

app.get('/cpu/:id',async (req,res) => {

    let query = Object.assign({}, {"cpu_name":req.params.id}, req.query);

    const cpu = await CPU.findOne(query);
    res.send({"cpu":cpu});
  
})

// POST 
app.post('/cpu', async(req,res) => {

    const cpu = new CPU(req.body);
    cpu.save().then((item)=>{
        res.status(200).send(item);
    }).catch((error)=>{
        res.status(400).send({error:error})
    })
})

// PUT
app.put('/cpu/:id',async(req,res)=>{

    CPU.updateOne({"cpu_name":req.params.id},{
        $set:req.body
    }).then((results)=>{
        res.status(200).send(results);
    }).catch((error)=>{
        res.status(400).send({error:error})
    })
})

// DELETE
app.delete('/cpu/:id',async(req,res)=>{
    CPU.deleteOne({"cpu_name":req.params.id}).then((item)=>{
        res.status(200).send(item);
    }).catch((error)=>{
        res.status(400).send({error:error})
    })
})

// PATCH
app.patch('/cpu/:id',async(req,res)=>{
    CPU.updateOne({"cpu_name":req.params.id},{
        $set:req.body
    }).then((item)=>{
        res.status(200).send(item);
    }).catch((error)=>{
        res.status(400).send({error:error})
    })
})


/*Server*/
app.listen(port,'0.0.0.0', () => {
  console.log("Hello World!")
})

module.exports = app