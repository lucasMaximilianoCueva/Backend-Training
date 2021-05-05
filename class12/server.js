import express from "express";
import { Server as HttpServer } from 'http';
import { Server as IOServer } from 'socket.io';
// import { createFront } from './routes/front.js';
// import { createProducts } from './routes/products.js';
import handlebars from 'express-handlebars';
// import path from 'path';

const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);
const PORT = 8080;

// let __dirname = path.resolve(path.dirname(""));

app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
    defaultLayout: "index.hbs",
    // layoutsDir: __dirname + "/views",
    // partialsDir: __dirname + "/views/partials",
  })
);

app.set("view engine", "hbs");
app.set("views", "./views");

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use('/', createFront());
// app.use('/api/products', createProducts());

let mostrados = 0

const productos = [
  { id: 0, nombre: 'galletitas' },
  { id: 1, nombre: 'flan' },
  { id: 2, nombre: 'torta' },
  { id: 3, nombre: 'empanadas' },
  { id: 4, nombre: 'pizza' },
  { id: 5, nombre: 'harina' },
]

app.get('/', (req, res) => {
  res.render('main');
});

io.on('connection', socket => {
  console.log('cliente conectado!')
  socket.emit('productos', productos.slice(0, mostrados))

  socket.on('boton', () => {
    mostrados++
    socket.emit('productos', productos.slice(0, mostrados))
  })
})

const connectedServer = httpServer.listen(PORT, () => {
  console.log(`Server Initialized in PORT: ${PORT}`);
});

connectedServer.on("error", (error) => {
  console.log(`something went wrong, ERROR in server: ${error.message}`);
});