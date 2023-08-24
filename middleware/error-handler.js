const errorHandler = (err, req, res, next) => {
  console.log(err)
  return res.status(500).json({
    msg: 'We had an internal server error while processing the request!'
  })
}

module.exports = errorHandler
