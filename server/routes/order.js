const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth');
const Order = require('../models/Order');

// @route GET api/orders
// @desc Get order
// @access Private
router.get('/', verifyToken, async (req, res) => {
    try {
        const orders = await Order.find({ user: req.userId }).populate('user', ['username']);
        res.json({ success: true, orders });
    } catch (error) {}
});

// @route POST api/orders
// @desc Create order
// @access Private
router.post('/', verifyToken, async (req, res) => {
    const {
        userName,
        userAddress,
        userPhone,
        paymentMethod,
        productsList,
        status,
    } = req.body;
    try {
        const newOrder = new Order({
            userName,
            userAddress,
            userPhone,
            paymentMethod,
            productsList,
            status,
            user: req.userId,
        });
        await newOrder.save();
        res.json({
            success: true,
            message: 'Create order successful!',
            order: newOrder,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
});

module.exports = router;
