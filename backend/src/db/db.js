const mongoose = require('mongoose');

const DB = "mongodb+srv://darjikart:darjikart@cluster0.wformo0.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connection to database is successful");
}).catch((err) => {
    console.log(`${err} : connection failed!....`);
});