import express from 'express';
import { products } from '../prod.js';

const createFront = () => {
    const routeFront = express.Router();
    routeFront.use(express.json());
    routeFront.use(express.urlencoded({ extended: true }));

    routeFront.get('/', (req, res) => {
        res.render('main');
    });

    routeFront.get('/products/view', (req, res) => {
        res.render('product-view', { products: products.getProd() });
    });

    routeFront.get('/products/cards', (req, res) => {
        res.render('products-cards', { products: products.getProd() });
    });

    routeFront.get('/products/view/:id', (req, res) => {
        const { id } = req.params;
        const list = products.getProd();
        res.render('product-detail', { products: products.getProdId(id), list: list });
    })

    return routeFront;
};

export { createFront };