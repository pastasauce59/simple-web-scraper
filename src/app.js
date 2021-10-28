let results = document.querySelector('#results');

fetch(`http://localhost:9999/scraped`)
.then(res => res.json)
.then(datas => datas.forEach(
    data => {
        let newDiv = document.createElement('div');
        let newH3 = document.createElement('h3');
        newDiv.textContent = data.title;
        newH3.textContent = data.url
        results.append(newDiv,newH3)
    })
)