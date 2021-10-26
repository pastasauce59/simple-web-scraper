import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Cheerio } from 'cheerio';
// import { Express } from 'express';

class App extends Component {

componentDidMount() {
  axios.get('https://www.bbc.com/')
  .then(response => {
    if(response.status === 200)
    {const website = response.data;
     const $ = Cheerio.load(website);
     const data = []

     $('.media__title', website).each(() =>{
       const title = $(this).text()
       const url = $(this).find('a').attr('href')
       data.push({
         title,
         url
       })
     })
     console.log(data)
    } else {
      console.log('Website not found')
    }
  })

}

  render() {
    return (
      <div>
        <h4>Simple Web Scraping</h4>
      </div>
    );
  }
}

export default App;
