const PRODUCTS_DB = [];

export class ProductsDB {
    constructor() {}

    getProd() {
        if(PRODUCTS_DB.length >= 1) {
            return PRODUCTS_DB;
        }
        return false;
    };

    getProdId(id) {
        const reqPar = PRODUCTS_DB.filter(
            (product) => product.id === Number(id)
        );
        if(reqPar.length < 1) {
            return false;
        }
        return reqPar;
    };

    postProd(data) {
        data.id = PRODUCTS_DB.length + 1;
        PRODUCTS_DB.push(data);
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