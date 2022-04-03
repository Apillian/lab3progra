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
        {
            idUsuario: '22334',
            username:'marco22',
            password: 'Password',
            email:'marco@gmail.com',
            creationdate: 12/9/2014
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
     }
    
    ]
},
{
    idCompra: 'jenfna',
    totalCompra: '2,000',
    userId: 'fedb2',
    fechaHoraCompra: 24/9/2013,
    detalles: [{
        idDetalle: '5252',
        idCompra: '76723',
        producto: 'Pan',
        cantidadComprada: '12',
        precioUnitario: '25.44',
        subTotal: '610.56'
     }
    
    ]
}


];




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
    console.log("GET desde /api/places/");
    const usrName = req.params.pid;
    const usr2retrieve = DUMMY_USSR.filter( p => {return p.id === usrName}); 


    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(errors);
        return next(
            new HttpError("Los datos ingresados no son validos.", 422)
        );}
        else{
            res.json(usr2retrieve);

        
        }
        
}


//4
export const getCompra = (req, res, next) => {
    console.log("GET desde /api/places/");
    const usrName = req.params.pid;
    const usr2retrieve = DUMMY_COMPRAS.filter( p => {return p.id === usrName}); 


    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(errors);
        return next(
            new HttpError("Los datos ingresados no son validos.", 422)
        );}
        else{
            res.json(usr2retrieve);

        
        }
        
}

//5
export const createCompra = async (req, res, next) => {

    console.log("POST desde /api/places/");
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(errors);
        return next(
            new HttpError("Los datos ingresados no son validos.", 422)
        );
    } else {
        {const {idCompra,totalCompra,userid,fechaHoraCompra,detalles} = req.body;
        


        const compra2Create = {
            idCompra: idCompra,
            totalCompra: totalCompra,
            userid: userid,
            fechaHoraCompra: fechaHoraCompra,
            detalles : detalles
        }

        DUMMY_COMPRAS.push(compra2Create);
        res.status(201).json(compra2Create);
    }
}}

//9 WIP

export const updateCompra = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(errors);
        return next(
            new HttpError("Los datos ingresados no son validos.", 422)
        );
    } else {
        const {detalles} = req.body; //datos desde el body req
        const placeId = req.params.pid; //datos desde ruta

        const place2Update = 
        {...DUMMY_PLACES.find(p => (p.id === placeId))};
        place2Update.idDetalle = idDetalle;
        place2Update.idCompra = idCompra;
        place2Update.producto = producto;
        place2Update.description = description;
        place2Update.cantidadComprada = cantidadComprada;
        place2Update.precioUnitario = precioUnitario;
        place2Update.subTotal = subTotal;

        const placeIndex = DUMMY_PLACES.findIndex(p => (p.id === placeId));
        DUMMY_PLACES[placeIndex] = place2Update;
        res.status(200).json(place2Update);
    }
}