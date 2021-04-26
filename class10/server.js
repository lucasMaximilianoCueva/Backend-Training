import path from "path";
import express from "express";
import handlebars from "express-handlebars";
import { crearRouterFront } from "./routers/routerFront.js";
import { crearRouterProductos } from "./routers/routerProducts.js";

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
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials",
  })
);
app.set("view engine", "hbs");
app.set("views", "./views");

app.use("/", crearRouterFront());
app.use("/api/productos", crearRouterProductos());

const server = app.listen(PORT, () => {
  console.log(`El servidor se inicio en el PUERTO: ${PORT}`);
});
server.on("error", (error) => {
  console.error(`ERROR en el servidor: ${error.message}`);
});