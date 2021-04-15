import express from 'express'

const app = express()

let visitItem = 0;
let visitItems = 0;
const items = [
    {
      "id": 1,
      "title": "Mercedes Benz C Class",
      "price": 48000,
      "thumbnail": "https://i.blogs.es/4ba188/mercedes-benz-c-class-2019-1600-01/1366_2000.jpg"
    },
    {
      "id": 2,
      "title": "BMW Serie 3",
      "price": 45000,
      "thumbnail": "https://hips.hearstapps.com/es.h-cdn.co/cades/contenidos/9888/bmw-serie-3-2018-delantera.jpg?resize=980:*"
    }
  ]

app.get('/items', (req,res) => {
    ++visitItems
    res.json(`{items: ${JSON.stringify(items)}, quantity: ${items.length}}`)
})

app.get('/item-random', (req,res) => {
    ++visitItem
    res.json(JSON.stringify(items[Math.floor(Math.random() * items.length)]))
})

app.get('/visits', (req,res) => {
    res.send(`Visits on "/items": ${visitItems} \t Visits on "/random-item": ${visitItem}`)
})

const PORT = 8080

const server = app.listen(PORT, () => {
    console.log(`Server listening on PORT ${server.address().port}`)
})
server.on("error", error => console.log(`Error on Server ${error}`))


// import express from 'express';

// const app = express();

// const port = 8080;
// const server = app.listen(port, () => {
//     console.log(`Running server on PORT: ${server.address().port}`)
// });

// server.on('error', err => console.log('ERROR: ' + err));