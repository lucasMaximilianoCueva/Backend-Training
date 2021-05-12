import express, { Application, Request, Response } from 'express'
import handlebars from 'express-handlebars'
import { createFront } from './routes/front';
import { createProducts } from './routes/products';
import { products } from './prod';

const app: Application = express();

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

const PORT: number = 8080;

const server = app.listen(PORT, () => {
    console.log(`Http server listening on port ${PORT}`);
  });
  
  server.on("error", error => console.log(`Error: ${error}`));