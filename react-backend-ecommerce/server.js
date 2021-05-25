import express from "express";
import cors from "cors";
import { prod } from "./prod.js";
import { cartDb } from "./cart.js";

const app = express();
const admin = true;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/cart", cors(), (req, res) => {
  res.json(cartDb.getCart());
});

app.get("/api/cart/:id", cors(), (req, res) => {
  const { id } = req.params;
  res.json(cartDb.getCartId(id));
});

app.post("/api/cart", (req, res) => {
  if (admin) {
    const data = req.body;
    cartDb.postCart(data);
  } else {
    res.send(
      `"error" : 'does not have permissions', "description": route = '${req.url}' method = '${req.method}' not authorized`
    );
  }
});

app.delete("/api/cart/:id", (req, res) => {
  if (admin) {
    const { id } = req.params;
    res.json(cartDb.deleteCartItem(id));
  } else {
    res.send(
      `"error" : 'does not have permissions', "description": route = '${req.url}' method = '${req.method}' not authorized`
    );
  }
});

// API PROD

app.get("/api/products", cors(), (req, res) => {
  prod.list().then((list) => {
    res.json(list) 
  })
});

app.get("/api/products/:id", cors(), (req, res) => {
  const { id } = req.params;
  prod.listById(id).then((list) => {
    res.json(list);
  })
});

app.post("/api/products", (req, res) => {
  if (admin) {
    const data = req.body;
    prod.insert(data).then(() => {
      res.json(data)
    })
    // res.redirect('http://localhost:3000/products');
  } else {
    res.send(
      `"error" : 'does not have permissions', "description": route = '${req.url}' method = '${req.method}' not authorized`
    );
  }
});

app.put("/api/products/:id", (req, res) => {
  if (admin) {
    const data = req.body;
    const { id } = req.params;
    prod.updateById(id, data).then(() => {
      res.json(data)
    })
  } else {
    res.send(
      `"error" : 'does not have permissions', "description": route = '${req.url}' method = '${req.method}' not authorized`
    );
  }
});

app.delete("/api/products/:id", (req, res) => {
  if (admin) {
    const { id } = req.params;
    prod.deleteById(id).then(() => {
      res.json(`product with id ${id} deleted`)
    })
  } else {
    res.send(
      `"error" : 'does not have permissions', "description": route = '${req.url}' method = '${req.method}' not authorized`
    );
  }
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
