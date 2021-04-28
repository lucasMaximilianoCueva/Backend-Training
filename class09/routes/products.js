import express from "express";
import { ProductsDB } from "../prod.js";
const prodDb = new ProductsDB();

const createProducts = () => {
  const routeProducts = express.Router();
  routeProducts.use(express.json());
  routeProducts.use(
    express.urlencoded({
      extended: true,
    })
  );

  routeProducts.get("/", (req, res) => {
      res.json(prodDb.getProd());
  });

  routeProducts.get("/:id", (req, res) => {
    const { id } = req.params;
      res.json(prodDb.getProdId(id));

  });

  routeProducts.post("/", (req, res) => {
    const data = req.body;
    res.json(prodDb.postProd(data));
  });

  routeProducts.put("/:id", (req, res) => {
    const data = req.body;
    const { id } = req.params;
    res.json(prodDb.putProd(data, id));
  });

  routeProducts.delete("/:id", (req, res) => {
    const { id } = req.params;
    res.json(prodDb.deleteProd(id));
  });
  return routeProducts;
};

export { createProducts };
