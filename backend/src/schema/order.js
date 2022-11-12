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
    }
});

const order = new mongoose.model('order',orderSchema);

module.exports = order;