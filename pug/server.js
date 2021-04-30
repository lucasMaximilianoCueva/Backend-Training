import express from "express";
import { createFront } from './routes/front.js';
import { createProducts } from './routes/products.js';
const app = express();
const PORT = 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("views", "./views");
app.set("view engine", "pug");

app.use('/', createFront());
app.use('/api/products', createProducts());

const server = app.listen(PORT, () => {
  console.log(`Server Initialized in PORT: ${PORT}`);
});

server.on("error", (error) => {
  console.log(`something went wrong, ERROR in server: ${error.message}`);
});