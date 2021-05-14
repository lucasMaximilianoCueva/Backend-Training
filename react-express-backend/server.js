const express = require('express');
const cors = require('cors');

const app = express();

app.get('/api/cart', cors(), (req, res) => {
  const cart = [
    {
      "id": 1,
      "timestamp":"2021-05-13T01:39:53.231Z",
      "product": [{
          "title": "Volkswagen",
          "price": 80000,
          "thumbnail": "https://s7d1.scene7.com/is/image/volkswagen/VW_NGW6_Launch_ID4_Homepage_Masthead?Zml0PWNyb3AsMSZmbXQ9anBnJnFsdD03OSZ3aWQ9ODAwJmhlaT04MDAmYWxpZ249MC4wMCwwLjAwJmEzZWU=",
          "id": 1
      }]
  }
  ];

  res.json(cart);
});

app.get('/api/products', cors(), (req, res) => {
  const products = [
    {
      "title": "Volkswagen",
      "timestamp": "2021-06-13T17:39:53.231Z",
      "code": 178221,
      "description": "Electric car",
      "price": 80000,
      "thumbnail": "https://s7d1.scene7.com/is/image/volkswagen/VW_NGW6_Launch_ID4_Homepage_Masthead?Zml0PWNyb3AsMSZmbXQ9anBnJnFsdD03OSZ3aWQ9ODAwJmhlaT04MDAmYWxpZ249MC4wMCwwLjAwJmEzZWU=",
      "id": 1,
      "stock": 100
  },
  {
    "title": "Volkswagen",
      "timestamp": "2021-06-13T17:39:53.231Z",
      "code": 178221,
      "description": "Electric car",
      "price": 80000,
      "thumbnail": "https://s7d1.scene7.com/is/image/volkswagen/VW_NGW6_Launch_ID4_Homepage_Masthead?Zml0PWNyb3AsMSZmbXQ9anBnJnFsdD03OSZ3aWQ9ODAwJmhlaT04MDAmYWxpZ249MC4wMCwwLjAwJmEzZWU=",
      "id": 2,
      "stock": 100
},
{
  "title": "Volkswagen",
      "timestamp": "2021-06-13T17:39:53.231Z",
      "code": 178221,
      "description": "Electric car",
      "price": 80000,
      "thumbnail": "https://s7d1.scene7.com/is/image/volkswagen/VW_NGW6_Launch_ID4_Homepage_Masthead?Zml0PWNyb3AsMSZmbXQ9anBnJnFsdD03OSZ3aWQ9ODAwJmhlaT04MDAmYWxpZ249MC4wMCwwLjAwJmEzZWU=",
      "id": 3,
      "stock": 100
},
{
  "title": "Volkswagen",
      "timestamp": "2021-06-13T17:39:53.231Z",
      "code": 178221,
      "description": "Electric car",
      "price": 80000,
      "thumbnail": "https://s7d1.scene7.com/is/image/volkswagen/VW_NGW6_Launch_ID4_Homepage_Masthead?Zml0PWNyb3AsMSZmbXQ9anBnJnFsdD03OSZ3aWQ9ODAwJmhlaT04MDAmYWxpZ249MC4wMCwwLjAwJmEzZWU=",
      "id": 4,
      "stock": 100
}
  ];
  
  res.json(products);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);