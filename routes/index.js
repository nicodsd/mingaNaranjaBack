//var express = require('express');
import express from "express";
import UserRouter from './users.js'
import authorRouter from './authors.js'
import categoryRouter from './categories.js'
import companyRouter from './companies.js'
import mangaRouter from './mangas.js'
import chapterRouter from './chapters.js'

const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'TITULO DEL BACK',
    subtitle: 'endpoints of minga'
  });
});


let endpoint = '/users'
function funcionDelEndpoint(req, res, next) {
  res.send('respond with a resource');
}

router.get(endpoint, funcionDelEndpoint)

router.get('/products', (req, res, next) => {
  return res.status(200).send('se encontraron productos para el endpoint')
})

router.get('/carts', (req, res, next) => res.status(200).json({
  carts: [],
  succes: true
}))

// Rutas
router.use('/auth', UserRouter)
router.use('/authors', authorRouter)
router.use('/categories', categoryRouter)
router.use('/chapters', chapterRouter)
router.use('/companies', companyRouter)
router.use('/mangas', mangaRouter)

export default router;
