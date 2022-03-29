import {v4 as uuidv4} from 'uuid';
import { validationResult } from 'express-validator';

import HttpError from '../models/http-error.js';

const DUMMY_USSR = [
    {
        idUsuario: '5373',
        username:'fedb23',
        password: 'Password',
        email:'fernando@gmail.com',
        creationdate: 23/9/2014
        },


        
];
const DUMMY_COMPRAS = [
{
    idCompra: 'pscw425',
    totalCompra: '25,000',
    userId: 'fedb23',
    fechaHoraCompra: 23/9/2013,
    detalles: [{
        idDetalle: '2442',
        idCompra: '221114',
        producto: 'Queso',
        cantidadComprada: '24',
        precioUnitario: '25.44',
        subTotal: '610.56'
     }]
}];



//1
export const postUser = async(req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(errors);
        return next(
            new HttpError("Los datos ingresados no son validos.", 422)
        );}
        else
    
   {const {username,password,email,creationdate} = req.body;
        const newusr = {
            idUsuario: uuidv4(),
            username,
            password,
            email,
            creationdate
        }
        DUMMY_USSR.push(newusr);
        res.status(201).json(newusr);
    }
}

//2


//3
export const getUser = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(errors);
        return next(
            new HttpError("Los datos ingresados no son validos.", 422)
        );}
        else{
        const usrinfo = req.params.uname;

        
        }
        
}
