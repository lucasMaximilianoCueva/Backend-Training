
import express from "express";
import { productos } from "../producto.js";

const crearRouterProductos = () => {
  const routerProductos = express.Router();
  routerProductos.use(express.json());
  routerProductos.use(express.urlencoded({ extended: true }));

  routerProductos.get("/", (req, res) => {
    res.json(productos.get());
  });

  routerProductos.get("/:id", (req, res) => {
    const { id } = req.params;
    res.json(productos.getByID(id));
  });

  routerProductos.post("/", (req, res) => {
    const data = req.body;
    console.log(productos.add(data));
    res.redirect("/");
  });

  routerProductos.put("/:id", (req, res) => {
    const data = req.body;
    const { id } = req.params;
    res.json(productos.update(data, id));
  });

  routerProductos.delete("/:id", (req, res) => {
    const { id } = req.params;
    res.json(productos.delete(id));
  });

  return routerProductos;
};

export { crearRouterProductos };