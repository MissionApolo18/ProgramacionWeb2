import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

//configDotenv.config({path:'.env'});

const idGenera=()=> Math.random.toString(32).substring(2)+Date.now().toString(32);

const JWTGenera=(info)=>
    JWTGenera.sign({
        id:info.id_usr,
        nombre:info.correo,
    }, process.env.SC_JWT, {
        expiresIn:'1d'
    })

export {idGenera, JWTGenera}