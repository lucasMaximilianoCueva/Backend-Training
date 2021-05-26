import moment from 'moment';
import fs from 'fs';

export class CartDB {
    constructor() {
        this.CART_DB = fs.readFile('Cart.txt', 'utf-8', (err, data) => {
            if (err) {
                console.log("Error reading the file");
            } else {
                this.CART_DB = JSON.parse(data)
            }
        });;
        this.nextCartDb = 0;
        this.timeStamp = moment().format('DD/MM/YYYY h:mm:ss a');
        this.codeProd = Math.round(Math.random()*10000); 
    }

    getCart() {
        return this.CART_DB.length
        ? [...this.CART_DB]
        : { error: 'No Products Loaded' }
    };

    getCartId(id) {
        const reqP = this.CART_DB.find(
            (product) => product.id == (id)
        );
        return reqP || { error: 'No Products Founded' }
    };

    postCart(data) {
        const newProd = { ...data, id: ++this.nextCartDb, timestamp: this.timeStamp, code:this.codeProd };
        this.CART_DB.push(newProd);
        fs.writeFileSync(`Cart.txt`, JSON.stringify(this.CART_DB))
        return newProd;
    };

    deleteCartItem(id) {
        const delProd = this.CART_DB.filter(
            (product) => product.id == id 
        );
        this.CART_DB = this.CART_DB.filter(
            (product) => product.id !== Number(id)
        )
        fs.writeFileSync(`Cart.txt`, JSON.stringify(this.CART_DB))
        return delProd
    };
};

const cartDb = new CartDB();

export { cartDb };