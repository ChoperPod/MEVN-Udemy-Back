import express from "express";
const router = express.Router();
import User from "../models/user";
import bcrypt from "bcrypt";
const saltRounds = 10;

// Importacion de JSON Web Token
const jwt = require('jsonwebtoken');

router.post('/', async (req, res) => {
    const body = req.body;
    console.log('error desde backend')
    try {
        // Evaluando el Email
        const usuarioDB = await User.findOne({ email: body.email })
        if (!usuarioDB) {   
            return res.status(400).json({
                mensaje: 'Email no encontrado'      
            })
        }

        // Evaluando el pass
        if (!bcrypt.compareSync(body.pass, usuarioDB.pass)) {
            return res.status(400).json({
                mensaje: 'Pass incorrecto'
            })
        }

        // Generar Tokens
        const token = jwt.sign({
            data: usuarioDB
        },
            'secret', { expiresIn: 60 * 60 });

        //si pasan las validaciones anteriores se envia un token
        res.json({
            usuarioDB,
            token
        })

    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
})

module.exports = router;