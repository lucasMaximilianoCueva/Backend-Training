interface Products {
    title: string,
    price: number, 
    thumbnail: string,
    id: number
}

export class ProductsDB {

    private PRODUCTS_DB: Array<Products>;
    private nextProdDb: number;
    
    constructor() {
        this.PRODUCTS_DB = [{
            "title": "Volkswagen",
            "price": 80000,
            "thumbnail": "https://s7d1.scene7.com/is/image/volkswagen/VW_NGW6_Launch_ID4_Homepage_Masthead?Zml0PWNyb3AsMSZmbXQ9anBnJnFsdD03OSZ3aWQ9ODAwJmhlaT04MDAmYWxpZ249MC4wMCwwLjAwJmEzZWU=",
            "id": 1
        }];
        this.nextProdDb = 0;
    }

    getProd() {
        return this.PRODUCTS_DB.length
        ? [...this.PRODUCTS_DB]
        : { error: 'No Products Loaded' }
    };

    getProdId(id: string) {
        const reqP = this.PRODUCTS_DB.find(
            (product: any) => product.id == (id)
        );
        return reqP || { error: 'No Products Founded' }
    };

    postProd(data: any) {
        const newProd = { ...data, id: ++this.nextProdDb };
        this.PRODUCTS_DB.push(newProd);
        return newProd;
    };

    putProd(data: any, id: string) {
        this.PRODUCTS_DB = this.PRODUCTS_DB.map((product: any) => {
            if(product.id == id) {
                product.title = data.title;
                product.price = data.price;
                product.thumbnail = data.thumbnail;
            }
            return product;
        });
        return data;
    };

    deleteProd(id: string) {
        const delProd = this.PRODUCTS_DB.filter(
            (product: any) => product.id == id 
        );
        this.PRODUCTS_DB = this.PRODUCTS_DB.filter(
            (product) => product.id !== Number(id)
        )
        return delProd
    };
};

const products = new ProductsDB();

export { products };
export { Products };