import express from "express";
import { createFront } from './routes/front.js';
import { createProducts } from './routes/products.js';
import handlebars from 'express-handlebars';
import path from 'path';
const app = express();
const PORT = 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

const server = app.listen(PORT, () => {
  console.log(`Server Initialized in PORT: ${PORT}`);
});

server.on("error", (error) => {
  console.log(`something went wrong, ERROR in server: ${error.message}`);
});