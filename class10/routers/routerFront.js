import express from "express";
import { productos } from "../producto.js";

const crearRouterFront = () => {
  const routerFront = express.Router();
  routerFront.use(express.json());
  routerFront.use(express.urlencoded({ extended: true }));

  routerFront.get("/", (req, res) => {
    res.render("main");
  });

  routerFront.get("/productos/vista", (req, res) => {
    res.render("lista-productos", { productos: productos.get() });
  });

  return routerFront;
};

export { crearRouterFront };