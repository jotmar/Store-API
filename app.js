// Variables
// async errors
const express = require('express')
const app = express()
const connectDB = require('./db/connect')
const port = 3000
require('dotenv').config()

// Middlewares Variables
const notFoundError = require('./middleware/not-found')
const errorHandler = require('./middleware/error-handler')
//
// ROUTES
//

app.get('/', (req, res) => {
  res
    .status(200)
    .send('<h1>Store API</h1><a href="/products">Products route</a>')
})

//
//MIDDLEWARES
//

app.use(express.json())
app.use(notFoundError)
app.use(errorHandler)

//
// START
//

const start = async () => {
  try {
    // Connect DB
    await connectDB(process.env.MONGO_URI)
    console.log('CONNECTED TO THE DB...')
    app.listen(port, () => {
      console.log(`Server is listening to port ${port}...`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
