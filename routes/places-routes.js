import express from "express";
import { check } from "express-validator";

//importamos controler.
import {postUser,getUser,getCompra,createCompra} 
        from "../controllers/places-controller.js";
const router = express.Router()

router.post('/usrpost', postUser);
router.post('/', createCompra);

router.get('/usrinfoid/:uname', getUser);
router.get('/usrcompra/:uname', getCompra);




export default router;