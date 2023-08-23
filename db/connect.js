const mongoose = require('mongoose')
const connectDB = async uri => {
  try {
    mongoose.connect(uri, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true
    })
  } catch (error) {
    console.log(error)
  }
}

module.exports = connectDB
