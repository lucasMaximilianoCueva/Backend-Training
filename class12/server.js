import express from "express";
import { Server as HttpServer } from 'http';
import { Server as IOServer } from 'socket.io';
import { createFront } from './routes/front.js';
import { createProducts } from './routes/products.js';
import handlebars from 'express-handlebars';
import path from 'path';

const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);
const PORT = 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

let __dirname = path.resolve(path.dirname(""));

app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
    defaultLayout: "index.hbs",
    layoutsDir: __dirname + "/views",
    partialsDir: __dirname + "/views/partials",
  })
);

app.set("views", "./views");
app.set("view engine", "hbs");

app.use('/', createFront());
app.use('/api/products', createProducts());

io.on('connection', socket => {
  console.log('User connected');
  socket.emit('Message', 'Message from Server');
  socket.on('Notification', data => {
    console.log(data);
  });
});

const connectedServer = httpServer.listen(PORT, () => {
  console.log(`Server Initialized in PORT: ${PORT}`);
});

connectedServer.on("error", (error) => {
  console.log(`something went wrong, ERROR in server: ${error.message}`);
});