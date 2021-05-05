export class ProductsDB {
    constructor() {
        this.PRODUCTS_DB = [];
        this.nextProdDb = 0;
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
        const newProd = { ...data, id: ++this.nextProdDb };
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

const products = new ProductsDB();

export { products };