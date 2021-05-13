import express from "express";
import { products } from "../prod";

const createProducts = () => {
  const routeProducts = express.Router();
  routeProducts.use(express.json());
  routeProducts.use(
    express.urlencoded({
      extended: true,
    })
  );

  routeProducts.get("/", (req, res) => {
      res.json(products.getProd());
  });

  routeProducts.get("/:id", (req, res) => {
    const { id } = req.params;
      res.json(products.getProdId(id));
  });

  routeProducts.post("/", (req, res) => {
    const data = req.body;
    products.postProd(data)
    res.redirect('/');
  });

  routeProducts.put("/:id", (req, res) => {
    const data = req.body;
    const { id } = req.params;
    res.json(products.putProd(data, id));
  });

  routeProducts.delete("/:id", (req, res) => {
    const { id } = req.params;
    res.json(products.deleteProd(id));
  });
  return routeProducts;
};

export { createProducts };
