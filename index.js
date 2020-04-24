const express = require('express')
const path = require('path')

const app = express()
const port = process.env.PORT || '8000'
//https://newsapi.org/v2/top-headlines?country=gb&apiKey=c3d70ad0232d4ecfb9bed0c791c22710
const apiKey = 'c3d70ad0232d4ecfb9bed0c791c22710'

app.get("/", (req, res) => {
  res.status(200).send('Hi')
})

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})