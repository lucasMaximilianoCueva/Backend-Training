import moment from 'moment';

export class ProductsDB {
    constructor() {
        this.PRODUCTS_DB = [
            {
                    "title": "Volkswagen",
                    "timestamp": "2021-06-13T17:39:53.231Z",
                    "code": 178221,
                    "description": "Electric car",
                    "price": 80000,
                    "thumbnail": "https://s7d1.scene7.com/is/image/volkswagen/VW_NGW6_Launch_ID4_Homepage_Masthead?Zml0PWNyb3AsMSZmbXQ9anBnJnFsdD03OSZ3aWQ9ODAwJmhlaT04MDAmYWxpZ249MC4wMCwwLjAwJmEzZWU=",
                    "id": 1,
                    "stock": 100
                }
        ];
        this.nextProdDb = 0;
        this.timeStamp = moment().format('DD/MM/YYYY h:mm:ss a') 
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
        const newProd = { ...data, id: ++this.nextProdDb, timestamp: this.timeStamp };
        this.PRODUCTS_DB.push(newProd);
        return newProd;
    };

    putProd(data, id) {
        this.PRODUCTS_DB = this.PRODUCTS_DB.map((product) => {
            if(product.id == id) {
                product.title = data.title;
                product.price = data.price;
                product.thumbnail = data.thumbnail;
            }
            return product;
        });
        return data;
    };

    deleteProd(id) {
        const delProd = this.PRODUCTS_DB.filter(
            (product) => product.id == id 
        );
        this.PRODUCTS_DB = this.PRODUCTS_DB.filter(
            (product) => product.id !== Number(id)
        )
        return delProd
    };
};

const prod = new ProductsDB();

export { prod };
