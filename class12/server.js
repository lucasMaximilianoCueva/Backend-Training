import express from 'express'
import { Server as HttpServer } from 'http'
import { Server as Socket } from 'socket.io'
import handlebars from 'express-handlebars'
import { createFront } from './routes/front.js';
import { createProducts } from './routes/products.js';
import { products } from './prod.js';

const app = express()
const httpServer = new HttpServer(app)
const io = new Socket(httpServer)

app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
    defaultLayout: 'index.hbs',
  })
);
app.set("view engine", "hbs");
app.set("views", "./views");

app.use('/', createFront());
app.use('/api/products', createProducts());

app.use(express.static('public'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

let mostrados = 0

const productos = products.getProd();

// app.get('/productos', (req, res) => {
//   res.render('inicio')
// })

io.on('connection', socket => {
  console.log('cliente conectado!')
  socket.emit('productos', productos)

  socket.on('boton', () => {
    mostrados++
    socket.emit('productos', productos)
  })
})

const PORT = 8080
const server = httpServer.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))
