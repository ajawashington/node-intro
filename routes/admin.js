const path = require('path')
const express = require("express");

const router = express.Router();

// const rootDir = require('../util/path');

const


const products = [];

router.get("/add-product", )


router.post('/add-product', (req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect('/');
})

exports.routes = router;
exports.products = products;