let results = document.querySelector('#results');

fetch(`http://localhost:9999/scraped`)
.then(res => res.json())
.then(datas => { datas.forEach(
    data => {
        let newDiv = document.createElement('div');
        let newH3 = document.createElement('h3');
        let newP = document.createElement('p')
        newDiv.className = "data"; 
        newH3.textContent = data.title;
        //added if statement because website scraped didn't provide full urls
        //for some of their articles, might not apply for other websites.
        if ( data.url.includes('https://www.bbc.com') ){
            newP.textContent = data.url
        } else {
            newP.textContent = 'https://www.bbc.com' + data.url
        }
        newDiv.append(newH3,newP)
        results.append(newDiv)
    })
})