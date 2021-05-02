export class ProductsDB {
    constructor() {
        this.PRODUCTS_DB = [{
            "title": "Macbook Air 256 GB",
            "price": "200",
            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU3mpSXVnx8QtnJGkxA6s0OH5WEeTrcGTAcg&usqp=CAU",
            "id": 1
        },
        {
            "title": "Macbook Air 256 GB",
            "price": "200",
            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU3mpSXVnx8QtnJGkxA6s0OH5WEeTrcGTAcg&usqp=CAU",
            "id": 2
        },
        {
            "title": "Macbook Air 256 GB",
            "price": "200",
            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU3mpSXVnx8QtnJGkxA6s0OH5WEeTrcGTAcg&usqp=CAU",
            "id": 3
        },
        {
            "title": "Macbook Air 256 GB",
            "price": "200",
            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU3mpSXVnx8QtnJGkxA6s0OH5WEeTrcGTAcg&usqp=CAU",
            "id": 4
        },
        {
            "title": "Macbook Air 256 GB",
            "price": "200",
            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU3mpSXVnx8QtnJGkxA6s0OH5WEeTrcGTAcg&usqp=CAU",
            "id": 5
        },
        {
            "title": "Macbook Air 256 GB",
            "price": "200",
            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU3mpSXVnx8QtnJGkxA6s0OH5WEeTrcGTAcg&usqp=CAU",
            "id": 6
        }
    ];
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