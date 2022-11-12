const express = require('express');

require('./db/db');

const app = express();

const order = require('./Route/order');

app.use(express.json());
// app.use(cookieParser());
app.use(express.urlencoded({extended:false}));

app.use(order);



app.get('/place-order', (req, res) => {
    res.send("welcome to home page ")
})

app.listen(8000,() => {
    console.log(`Listing to port: http://${process.env.HOST_NAME}:${process.env.HOST_PORT_NUMBER}`);
});