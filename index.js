const PORT = 9999
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

//url can be any website of choosing
let url = 'https://www.bbc.com/'

// For reference websites can be added to this array to keep a "history"
// of websites previously visted & scraped
let scrapedWebsites = ['https://www.bbc.com/']


app.get('/', function (req, res){
    res.json('home page simple web scraper')
})

app.get('/sites-scraped', function (req, res){
    res.json(scrapedWebsites)
})

app.get('/scraped', function (req, res){
    axios(url)
        .then(response => {
            let html = response.data
            let $ = cheerio.load(html)
            let websiteScraped = []
                //searching through websites elements will have to be adjusted
                //on case by case basis as not all websites use the same classnames, etc.
                $('.media__title', html).each(function() {
                //variables can be anything of your choosing, not just titles or urls
                let title = $(this).text()
                let url = $(this).find('a').attr('href')
                websiteScraped.push({
                    title,
                    url
                })
            })
            res.json(websiteScraped)
        })
        
})

app.listen(PORT, () => console.log(`server runnong on PORT ${PORT}`))