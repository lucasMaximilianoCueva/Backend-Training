const PRODUCTS_DB = [];

export class ProductsDB {
    constructor() {}

    getProd() {
        if(PRODUCTS_DB.length >= 1) {
            return PRODUCTS_DB;
        }
        return false;
    }

    getProdId(id) {
        const reqPar = PRODUCTS_DB.filter(
            (product) => product.id === Number(id)
        );
        if(reqPar.length < 1) {
            return false;
        }
        return reqPar;
    }

    postProd(data) {
        data.id = PRODUCTS_DB.length + 1;
        PRODUCTS_DB.push(data);
    }
} 