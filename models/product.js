const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product must have a name']
  },
  price: {
    type: Number,
    required: [true, 'Product must have a price']
  },
  rating: {
    type: Number,
    default: 4.5
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  company: {
    type: String,
    enum: {
      // Only accept specific values
      values: ['ikea', 'liddy', 'caressa', 'marcos'],
      message: '{VALUE} is not supported'
    }
  }
})

module.exports = mongoose.model('Product', productSchema)
