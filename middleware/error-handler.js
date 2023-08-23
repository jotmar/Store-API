const errorHandler = (err, req, res, next) => {
  return res.status(500).json({
    msg: 'We had an internal server error while processing the request!'
  })
}

module.exports = errorHandler
