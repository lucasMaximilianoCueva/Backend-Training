import moment from "moment";
import knexFunc from "knex";

export class ProductsDB {
  constructor(config) {
    this.knex = knexFunc(config);
    this.PRODUCTS_DB = [];
    this.nextProdDb = 0;
    this.timeStamp = moment().format("DD/MM/YYYY h:mm:ss a");
    this.codeProd = Math.round(Math.random() * 10000);
  }

  createTable() {
      return this.knex.schema.createTableIfNotExists("items", (table) => {
        table.increments("id").primary();
        table.string("title", 50).notNullable();
        table.string("description", 100).notNullable();
        table.string("timestamp", 50).notNullable();
        table.string("thumbnail", 1000).notNullable();
        table.string("code", 10).notNullable();
        table.float("price");
        table.integer("stock");
      });
  }

  //POST
  insert(items) {
    const newProd = { ...items, id: ++this.nextProdDb, timestamp: this.timeStamp, code:this.codeProd };
    return this.knex("items").insert(newProd);
  }
  //GET
  list() {
    return this.knex("items").select();
  }
  //GET BY ID
  listById(id) {
    return this.knex("items").where("id", id).select()
  }
  //DELETE BY ID
  deleteById(id) {
    return this.knex.from("items").where("id", id).del();
  }
  //PUT
  updateById(id, data) {
    return this.knex.from("items").where("id", id)
    .update({ 
        title: data.title,
        description: data.description,
        thumbnail: data.thumbnail,
        price: data.price,
        stock: data.stock 
    });
  }
  close() {
    return this.knex.destroy();
  }
  close() {
    return this.knex.destroy();
  }
}

const config = {
  client: "mysql",
  connection: {
    host: "localhost",
    user: "root",
    password: "",
    database: "itemdb",
  },
};

const prod = new ProductsDB(config);

export { prod };

// import moment from 'moment';
// import fs from 'fs';

// export class ProductsDB {
//     constructor() {
//         this.PRODUCTS_DB = fs.readFile('Products.txt', 'utf-8', (err, data) => {
//             if (err) {
//                 console.log("Error reading the file");
//             } else {
//                 this.PRODUCTS_DB = JSON.parse(data)
//             }
//         });
//         this.nextProdDb = 0;
//         this.timeStamp = moment().format('DD/MM/YYYY h:mm:ss a');
//         this.codeProd = Math.round(Math.random()*10000);
//     }

//     getProd() {
//         return this.PRODUCTS_DB.length
//         ? [...this.PRODUCTS_DB]
//         : { error: 'No Products Loaded' }
//     };

//     getProdId(id) {
//         const reqP = this.PRODUCTS_DB.find(
//             (product) => product.id == (id)
//         );
//         return reqP || { error: 'No Products Founded' }
//     };

//     postProd(data) {
//         const newProd = { ...data, id: ++this.nextProdDb, timestamp: this.timeStamp, code:this.codeProd };
//         this.PRODUCTS_DB.push(newProd);
//         fs.writeFileSync(`Products.txt`, JSON.stringify(this.PRODUCTS_DB))
//         return newProd;
//     };

//     putProd(data, id) {
//         this.PRODUCTS_DB = this.PRODUCTS_DB.map((product) => {
//             if(product.id == id) {
//                 product.title = data.title;
//                 product.price = data.price;
//                 product.thumbnail = data.thumbnail;
//                 product.description = data.description;
//                 product.stock = data.stock;
//             }
//             return product;
//         });
//         fs.writeFileSync(`Products.txt`, JSON.stringify(this.PRODUCTS_DB))
//         return data;
//     };

//     deleteProd(id) {
//         const delProd = this.PRODUCTS_DB.filter(
//             (product) => product.id == id
//         );
//         this.PRODUCTS_DB = this.PRODUCTS_DB.filter(
//             (product) => product.id !== Number(id)
//         )
//         fs.writeFileSync(`Products.txt`, JSON.stringify(this.PRODUCTS_DB))
//         return delProd
//     };
// };

// const prod = new ProductsDB();

// export { prod };
