const mongoose = require('mongoose');

// Schema Database
const PostSchema = mongoose.Schema({
    profile: {
        username:{
            type: String,
            default: "guest" + Math.floor(Math.random()*10000)+1
        },
        firstName: String,
        lastName: String
            
    },
    contact: {
        noTlp: {
            type: String,
            required: true
        },
        email: String,
        alamat: String,
    },
    jasa:{
        type : Object
    },
    keuangan :{
        pendapatan :{
            type: String,
            default : "0"
        } ,
        pengeluaran : {
            type : String,
            default : "0"
        },
        saldo: {
            type:String,
            default: "0"
        }

    }
})

module.exports = mongoose.model('Posts', PostSchema)