const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  clientName: { type: String, required: true },
  clientPhone: { type: String, required: true },
  clientAddress: { type: String, required: true },
  products: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      quantity: { type: Number, required: true },
    },
  ],
  totalPrice: { type: Number, required: true },
  status: { type: String, default: 'Pending' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', OrderSchema);
