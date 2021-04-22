import express from "express";
import { ProductsDB } from './prod.js';
const prodDb = new ProductsDB();

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/products", (req, res) => {
  const productsDb = prodDb.getProd();
  if (productsDb) {
    res.json(productsDb);
  } else {
    res.json({ error: "products not loaded" });
  }
});

app.get("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const user = prodDb.getProdId(id);
  if (user) {
    res.json(user);
  } else {
    res.json({ error: "product not found" });
  }
});

app.post("/api/products", (req, res) => {
  const data = req.body;
  prodDb.postProd(data);
  res.json(data);
});

app.put("api/products/:id", (req, res) => {
  const { id } = req.params;
  const data = req.body;
  res.json(prodDb.putProd(data, id));
});

app.delete("api/products/:id", (req, res) => {
  const { id } = req.params;
  res.json(prodDb.deleteProd(id));
});

const server = app.listen(PORT, () => {
  console.log(`Server Initialized in PORT: ${PORT}`);
});

server.on("error", (error) => {
  console.log(`something went wrong, ERROR in server: ${error.message}`);
});