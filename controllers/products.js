// Model
const Product = require('../models/product')

// Async errors
require('express-async-errors')

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find(req.query).sort('price')
  return res.status(200).json({ data: products, nbHits: products.length })
}

const getAllProducts = async (req, res) => {
  const { featured, company, name, sort, fields } = req.query
  const queryObj = {}
  const limit = Number(req.query.limit) || 10
  let page = Number(req.query.page) || 1
  const skip = (page - 1) * limit
  let sortList = ''
  let fieldList = ''
  if (['false', 'true'].includes(featured)) {
    queryObj.featured = featured
  }
  if (['ikea', 'caressa', 'marcos', 'liddy'].includes(company)) {
    queryObj.company = company
  }
  if (name) {
    queryObj.name = { $regex: name, $options: 'i' }
  }
  if (sort) {
    sortList = sort.split(',').join(' ')
  }
  if (fields) {
    fieldList = fields.split(',').join(' ')
  }
  const products = await Product.find(queryObj)
    .sort(sortList)
    .select(fieldList)
    .limit(limit)
    .skip(skip)
  return res.status(200).json({ data: products, nbHits: products.length })
}

module.exports = { getAllProducts, getAllProductsStatic }
