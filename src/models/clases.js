const {Schema, model} = require("mongoose")

const userSchema = Schema({
    nombre:{
        type: String,
        required: true
    },
    inicio:{
        type: Number,
        required: true
    },
    fin:{
        type: Number,
        required: true
    },
    profesor:{
        type: String,
        requerid: true
    },
    cupos_disponibles:{
        type: Number
    },
    cupos:{
        type:Number,
        requerid:true
    },
    disponible:{
        type: Boolean,
        default:true
    }

})

module.exports=  model("clases", userSchema)