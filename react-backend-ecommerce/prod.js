import moment from 'moment';
import fs from 'fs';

export class ProductsDB {
    constructor() {
        this.PRODUCTS_DB = fs.readFile('Products.txt', 'utf-8', (err, data) => {
            if (err) {
                console.log("Error reading the file");
            } else {
                this.PRODUCTS_DB = JSON.parse(data)
            }
        });
        this.nextProdDb = 0;
        this.timeStamp = moment().format('DD/MM/YYYY h:mm:ss a');
        this.codeProd = Math.round(Math.random()*10000); 
    }

    getProd() {
        return this.PRODUCTS_DB.length
        ? [...this.PRODUCTS_DB]
        : { error: 'No Products Loaded' }
    };

    getProdId(id) {
        const reqP = this.PRODUCTS_DB.find(
            (product) => product.id == (id)
        );
        return reqP || { error: 'No Products Founded' }
    };

    postProd(data) {
        const newProd = { ...data, id: ++this.nextProdDb, timestamp: this.timeStamp, code:this.codeProd };
        this.PRODUCTS_DB.push(newProd);
        fs.writeFileSync(`Products.txt`, JSON.stringify(this.PRODUCTS_DB))
        return newProd;
    };

    putProd(data, id) {
        this.PRODUCTS_DB = this.PRODUCTS_DB.map((product) => {
            if(product.id == id) {
                product.title = data.title;
                product.price = data.price;
                product.thumbnail = data.thumbnail;
                product.description = data.description;
                product.stock = data.stock;
            }
            return product;
        });
        fs.writeFileSync(`Products.txt`, JSON.stringify(this.PRODUCTS_DB))
        return data;
    };

    deleteProd(id) {
        const delProd = this.PRODUCTS_DB.filter(
            (product) => product.id == id 
        );
        this.PRODUCTS_DB = this.PRODUCTS_DB.filter(
            (product) => product.id !== Number(id)
        )
        fs.writeFileSync(`Products.txt`, JSON.stringify(this.PRODUCTS_DB))
        return delProd
    };
};

const prod = new ProductsDB();

export { prod };
