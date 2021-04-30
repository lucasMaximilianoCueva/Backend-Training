import express from 'express';
import { products } from '../prod.js';

const createFront = () => {
    const routeFront = express.Router();
    routeFront.use(express.json());
    routeFront.use(express.urlencoded({ extended: true }));

    routeFront.get('/', (req, res) => {
        res.render('index.pug', req.query);
    });

    routeFront.get('/products/view', (req, res) => {
        res.render('view.pug', { products: products.getProd() });
    })

    return routeFront;
};

export { createFront };