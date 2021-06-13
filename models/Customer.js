const mongoose = require('mongoose');
// Schema Customers
const CustomerSchema = mongoose.Schema({
    profile: {
        username:{
            type: String,
            default: "guest" + Math.floor(Math.random()*10000)+1
        },
        firstName: String,
        lastName: String,
        imgName: {
            type : String,
            default : "user.jpg"
        },
        status : {
            type : Boolean,
            default : true
        }
             
    },
    contact: {
        noTlp: {
            type: String,
            required: true
        },
        email: String,
        alamat: String,
    },
    cart :{
        order : []
    },
    profileBusines :[]
    
})

module.exports = mongoose.model('Customers', CustomerSchema)