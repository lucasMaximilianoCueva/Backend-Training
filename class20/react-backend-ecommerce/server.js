import express from "express";
import { Server as HttpServer } from 'http';
import { Server as Socket } from 'socket.io';
import cors from "cors";
import { prod } from "./prod.js";
import { cartDb } from "./cart.js";
import { chat } from "./chat.js";

const admin = true;

const app = express();
const httpServer = new HttpServer(app);
const io = new Socket(httpServer);

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

//SOCKET.IO




io.on("connection", socket => {
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
  console.log('user connected!')

  chat.list().then((list) => {
    socket.emit("messages", list );
  })


  socket.on("new-message", data => {
    chat.insert(data).then(() => {
    })
    chat.list().then((list) => {
      io.emit("messages", list );
    })
  });
});

const port = 5000;

httpServer.listen(port, () => `Server running on port ${port}`);
