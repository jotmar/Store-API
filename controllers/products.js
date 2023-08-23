// Async errors
require('express-async-errors')

const getAllProductsStatic = async (req, res) => {
  throw new Error('Testing Async')
  return res.status(200).json({ msg: 'Get all products testing route' })
}

const getAllProducts = async (req, res) => {
  return res.status(200).json({ msg: 'Get all products route' })
}

module.exports = { getAllProducts, getAllProductsStatic }
