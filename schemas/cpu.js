const mongoose = require('mongoose');

const CpuSchema = mongoose.Schema({
    cpu_name:{type:String,required:true,unique:true},
    cores:{type:Number,required:true},
    threads:{type:Number,required:true},
    frequency:{type:String,required:true},
    brand:{type:String},
    socket:[{type:String}]
})

module.exports = mongoose.model('Cpu',CpuSchema);