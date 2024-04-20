const express = require('express')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 4000; 

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/achaa', (req, res) => {
    res.send('Hello World!w')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})