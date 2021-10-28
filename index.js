const PORT = 9999
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const app = express()


app.get('/', function (req, res){
    res.json('testing for web scraper')
})

app.listen(PORT, () => console.log(`server runnong on PORT ${PORT}`))