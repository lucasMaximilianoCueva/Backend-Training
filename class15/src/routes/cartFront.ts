import express from 'express';
import { cart } from "../cart";

const cartFront = () => {
    const routeFront = express.Router();
    routeFront.use(express.json());
    routeFront.use(express.urlencoded({ extended: true }));

    // routeFront.get('/', (req, res) => {
    //     res.render('main');
    // });

    routeFront.get('/', (req, res) => {
        res.render('product-list-cart', { products: cart.getProd() });
    });

    routeFront.get('/results', (req, res) => {
        res.render('products-cards', { products: cart.getProd() });
    });

    routeFront.get('/view/:id', (req, res) => {
        const { id } = req.params;
        const list = cart.getProd();
        res.render('products-view', { products: cart.getProdId(id), list: list });
    })

    return routeFront;
};

export { cartFront };