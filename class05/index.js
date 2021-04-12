const http = require('http');
const port = 8080
const timeNow = new Date().getHours();

const server = http.createServer((req, res) => {
    //console.log(req);
    res.end(JSON.stringify({
        id: Math.round(Math.random()*10), 
        title: "Producto " + Math.round(Math.random()*10),
        price: Math.floor((Math.random() * 9999.99) + 0.00),
        thumbnail: "Foto " + Math.round(Math.random()*10)
    }))
})

server.listen(port, () => {
    console.log(`conectado al puerto: ${port}`)
})