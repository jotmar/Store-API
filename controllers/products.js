const getAllProductsStatic = async (req, res) => {
  return res.status(200).json({ msg: 'Get all products testing route' })
}

const getAllProducts = async (req, res) => {
  return res.status(200).json({ msg: 'Get all products route' })
}

module.exports = { getAllProducts, getAllProductsStatic }
