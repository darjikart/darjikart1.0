// mongoose is used to connect through the mongodb database
const mongoose = require('mongoose');


const orderSchema = new mongoose.Schema({
    fname: {
        type: String,
        require: true,
    },
    lname: {

        type: String,
        require: true,
    },
    pId:{
        type: String,
        require: true,
    },
    houseadd:{
        type: String,
        require: true,
    },
    city:{
        type: String,
        require: true,
    },
    state:{
        type: String,
        require: true,
    },
    pin:{
        type: String,
        require: true,
    },
    phone:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
    }
});

const order = new mongoose.model('order',orderSchema);

module.exports = order;