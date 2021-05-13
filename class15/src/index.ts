import express, { Application } from 'express'
import handlebars from 'express-handlebars'
import { Server as HttpServer } from 'http';
import { Server as Socket } from 'socket.io';
import { createFront } from './routes/front';
import { createProducts } from './routes/products';
import { createCart } from './routes/createCart';
import { cartFront } from './routes/cartFront';
import { products } from './prod';

const app: Application = express();
const httpServer = new HttpServer(app);
const io = new Socket(httpServer);

app.engine(
    "hbs",
    handlebars({
      extname: ".hbs",
      defaultLayout: 'index.hbs',
    }));
  
app.set("view engine", "hbs");
app.set("views", "./src/views");

app.use('/products', createFront());
app.use('/api/products', createProducts());
app.use('/cart', cartFront()); 
app.use('/api/cart', createCart());

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const messages = [
  {author: "juan@gmail.com", text: "Hey! How are you?"},
  {author: "pedro@outlook.com", text: "Great! and you?"},
  {author: "lena@icloud.com", text: "Excelent!"}
]

io.on('connection', (socket: any)  => {
  console.log('client connected!');
  socket.emit('products', { products: products.getProd() });

  socket.on('btn', () => {
    socket.emit('products', { products: products.getProd() });
  });

  socket.emit('messages', messages);

    socket.on('new-message', data => {
        messages.push(data);
        io.sockets.emit('messages', messages);
    });
});

const PORT: number = 8080;

const server = httpServer.listen(PORT, () => {
    console.log(`Http server listening on port ${PORT}`);
  });
  
  server.on("error", error => console.log(`Error: ${error}`));