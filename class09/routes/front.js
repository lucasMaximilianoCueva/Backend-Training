import express from 'express';
import path from 'path';

const createFront = () => {
    const routeFront = express.Router();
    routeFront.use(express.json());
    routeFront.use(express.urlencoded({ extended: true }));

    routeFront.get('/', (req, res) => {
        res.sendFile(path.resolve("./public/index.html"));
    });
    return routeFront;
};

export { createFront };