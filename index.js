const express = require('express')
const cors = require('cors')
require('dotenv').config()
const PORT = process.env.PORT

const app = express()

app.get('/tweets', async (req, res, next) => {
  try {
    console.log(req)
  } catch (error) {
    console.log(error)
  }
})


app.listen(PORT, () => {
  console.log(`Server running on PORT=${PORT}`)
})