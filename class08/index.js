import express from "express";

const app = express();
const PORT = 8080;

const PRODUCTS_DB = [];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/products", (req, res) => {
  if (PRODUCTS_DB.length >= 1) {
    res.json(PRODUCTS_DB);
  } else {
    res.json({ error: "products not loaded" });
  }
});

app.get("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const user = PRODUCTS_DB.filter((product) => product.id == parseInt(id))[0];
  if (user) {
    res.json(user);
  } else {
    res.json({ error: "product not found" });
  }
});

app.post("/api/products", (req, res) => {
  const data = req.body;
  data.id = PRODUCTS_DB.length + 1;
  PRODUCTS_DB.push(data);
  res.status(201).json(data);
});

const server = app.listen(PORT, () => {
  console.log(`Server Initialized in PORT: ${PORT}`);
});

server.on("error", (error) => {
  console.log(`something went wrong, ERROR in server: ${error.message}`);
});
