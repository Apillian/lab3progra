import express from "express";
import { check } from "express-validator";

//importamos controler.
import {postUser} 
        from "../controllers/places-controller.js";
const router = express.Router()

router.post('/usrpost', postUser);

router.get('/usrinfoid/:uname', getUser);




export default router;