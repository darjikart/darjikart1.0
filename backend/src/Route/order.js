const { request } = require('express');
const express = require('express');

const order = require('../schema/order');

const router = express.Router();

router.route('/place-order').post(async (req, res) => {
    try {
        const newOrder = new order(req.body);
        const result = await newOrder.save();
        res.send(result);
        console.log(result);
    } catch (err) {
        res.send("something went wrong!....");
        console.log(err);
    }
});

module.exports = router;