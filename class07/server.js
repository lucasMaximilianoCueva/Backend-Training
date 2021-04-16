import express from "express";
import fs from "fs";

const app = express();

let visitItem = 0;
let visitItems = 0;

app.get("/items", (req, res) => {
  ++visitItems;
  const items = JSON.parse(fs.readFileSync("./files/products.txt", "utf-8"));
  const quantity = items.length;
  res.json({ items, quantity });
});

app.get("/item-random", (req, res) => {
  ++visitItem;
  const items = JSON.parse(fs.readFileSync("./files/products.txt", "utf-8"));
  const quantity = items.length;
  res.json({
    item: items[Math.floor(Math.random() * quantity)],
  });
});

app.get("/visits", (req, res) => {
  res.send(
    `Visits on "/items": ${visitItems} \t Visits on "/random-item": ${visitItem}`
  );
});

const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`Server listening on PORT ${server.address().port}`);
});
server.on("error", (error) => console.log(`Error on Server ${error}`));
