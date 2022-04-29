import express from "express";
import { check } from "express-validator";

//importamos controler.
import {postUser,getUser,getCompra,createCompra,getComprabyValor,getComprabydate,getALL} 
        from "../controllers/places-controller.js";
const router = express.Router()

router.post('/usrpost', postUser);
router.post('/', createCompra);

router.get('/usrinfoid/:uname', getUser);
router.get('/usrcompra/:uname', getCompra);

router.get('/usrcget/:fecha1/:fecha2',
[
        check('fecha1').isDate().not().isEmpty(),
        check('fecha2').isDate().not().isEmpty()
],
getComprabydate
);

router.get('/usrcget/:valor1/:valor2',
[
        check('valor1').isDate().not().isEmpty(),
        check('valor2').isDate().not().isEmpty()
],
getComprabyValor
);

router.get('/', getALL);


export default router;