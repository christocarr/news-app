const express = require('express')
const path = require('path')
const fetch = require('node-fetch')

const app = express()
const port = process.env.PORT || '8000'
//https://newsapi.org/v2/top-headlines?country=gb&apiKey=c3d70ad0232d4ecfb9bed0c791c22710
const apiKey = 'c3d70ad0232d4ecfb9bed0c791c22710'

app.use(express.json())

app.get("/", async (req, res) => {
  const data =  await fetch(`https://newsapi.org/v2/top-headlines?country=gb&apiKey=${apiKey}`)
  const json = await data.json()
  res.json(json.status)
})

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})