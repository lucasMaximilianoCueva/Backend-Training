import { Products } from './prod';

interface Cart {
    id: number
    timestamp: string,
    product: Products
}

export class CartDB {

    private CART_DB: Array<Cart>;
    private nextCartDb: number;
    
    constructor() {
        this.CART_DB = [{
            "id": 1,
            "timestamp":"2021-05-13T01:39:53.231Z",
            "product": {
                "title": "Volkswagen",
                "price": 80000,
                "thumbnail": "https://s7d1.scene7.com/is/image/volkswagen/VW_NGW6_Launch_ID4_Homepage_Masthead?Zml0PWNyb3AsMSZmbXQ9anBnJnFsdD03OSZ3aWQ9ODAwJmhlaT04MDAmYWxpZ249MC4wMCwwLjAwJmEzZWU=",
                "id": 1
            }
        },
        {
            "id": 2,
            "timestamp":"2021-04-13T01:39:53.231Z",
            "product": {
                "title": "Peugeot",
                "price": 60000,
                "thumbnail": "https://soymotor.com/sites/default/files/usuarios/redaccion/portal/redaccion/peugeot-508-sw-sport-tres-soymotor_0.jpg",
                "id": 2
            }
        }];
        this.nextCartDb = 0;
    }

    getProd() {
        return this.CART_DB.length
        ? [...this.CART_DB]
        : { error: 'No Products Loaded' }
    };

    getProdId(id: string) {
        const reqP = this.CART_DB.find(
            (product: any) => product.id == (id)
        );
        return reqP || { error: 'No Products Founded' }
    };

    postProd(data: any) {
        const newProd = { ...data, id: ++this.nextCartDb };
        this.CART_DB.push(newProd);
        return newProd;
    };

    putProd(data: any, id: string) {
        this.CART_DB = this.CART_DB.map((product: any) => {
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
        const delProd = this.CART_DB.filter(
            (product: any) => product.id == id 
        );
        this.CART_DB = this.CART_DB.filter(
            (product) => product.id !== Number(id)
        )
        return delProd
    };
};

const cart = new CartDB();

export { cart };