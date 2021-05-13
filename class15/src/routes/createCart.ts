import express from "express";
import { cart } from "../cart";

const createCart = () => {
  const routeProducts = express.Router();
  routeProducts.use(express.json());
  routeProducts.use(
    express.urlencoded({
      extended: true,
    })
  );

  routeProducts.get("/", (req, res) => {
      res.json(cart.getProd());
  });

  routeProducts.get("/:id", (req, res) => {
    const { id } = req.params;
      res.json(cart.getProdId(id));
  });

  routeProducts.post("/", (req, res) => {
    const data = req.body;
    cart.postProd(data)
    res.redirect('/');
  });

  routeProducts.put("/:id", (req, res) => {
    const data = req.body;
    const { id } = req.params;
    res.json(cart.putProd(data, id));
  });

  routeProducts.delete("/:id", (req, res) => {
    const { id } = req.params;
    res.json(cart.deleteProd(id));
  });
  return routeProducts;
};

export { createCart };
