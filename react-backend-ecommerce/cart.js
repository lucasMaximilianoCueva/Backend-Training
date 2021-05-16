export class CartDB {
    constructor() {
        this.CART_DB = [
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
        this.nextCartDb = 0;
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
        const newProd = { ...data, id: ++this.nextCartDb };
        this.CART_DB.push(newProd);
        return newProd;
    };

    putCart(data, id) {
        this.CART_DB = this.CART_DB.map((product) => {
            if(product.id == id) {
                product.title = data.title;
                product.price = data.price;
                product.thumbnail = data.thumbnail;
            }
            return product;
        });
        return data;
    };

    deleteCartItem(id) {
        const delProd = this.CART_DB.filter(
            (product) => product.id == id 
        );
        this.CART_DB = this.CART_DB.filter(
            (product) => product.id !== Number(id)
        )
        return delProd
    };
};

const cartDb = new CartDB();

export { cartDb };