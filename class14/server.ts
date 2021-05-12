const express = require('express');
const handlebars = require('express-handlebars');
const app = express();
const httpServer = require('http').Server(app);
const io = require('socket.io')(httpServer);
import { createFront } from './routes/front.js';
import { createProducts } from './routes/products.js';
import { products } from './prod.js';

app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
    defaultLayout: 'index.hbs',
  }));

app.set("view engine", "hbs");
app.set("views", "./views");

app.use('/', createFront());
app.use('/api/products', createProducts());

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const messages = [
  {author: "juan@gmail.com", text: "Hey! How are you?"},
  {author: "pedro@outlook.com", text: "Great! and you?"},
  {author: "lena@icloud.com", text: "Excelent!"}
]

io.on('connection', (socket: any) => {
  console.log('client connected!');
  socket.emit('products', { products: products.getProd() });

  socket.on('btn', () => {
    socket.emit('products', { products: products.getProd() });
  });

  socket.emit('messages', messages);

    socket.on('new-message', (data: any) => {
        messages.push(data);
        io.sockets.emit('messages', messages);
    });
});

const PORT: number = 8080;

const server = httpServer.listen(PORT, () => {
  console.log(`Http server listening on port ${PORT}`);
});

server.on("error", (error: string) => console.log(`Error: ${error}`));
