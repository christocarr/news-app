const express = require('express')
const path = require('path')
const fetch = require('node-fetch')

const app = express()
const port = process.env.PORT || '8000'
const apiKey = 'c3d70ad0232d4ecfb9bed0c791c22710'


app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get("/", async (req, res) => {
  const data =  await fetch(`https://newsapi.org/v2/top-headlines?country=gb&apiKey=${apiKey}`)
  const jsonData = await data.json()
  const articles = jsonData.articles
  const newsTitles = articles.map(article => {
    return article.title
  })
  res.render('index', {
    newsTitles: newsTitles,
    newsapiLink: 'https://newsapi.org'
  })
})

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})