const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const OrderSchema = new Schema({
    productsList: {
        type: Array,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    userAddress: {
        type: String,
        required: true,
    },
    userPhone: {
        type: String,
        required: true,
    },
    paymentMethod: {
        type: String,
        default: '',
    },
    status: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    user: {
		type: Schema.Types.ObjectId,
		ref: 'users'
	}
});
module.exports = Order = mongoose.model('orders', OrderSchema);
