// var express = require('express');
import express from "express";
const router = express.Router();

// Importamos modelo Tarea
import User from '../models/user';

const { verificarAuth, verificarAdministrador } = require('../middlewares/autenticacion.js');

// Hash Contraseña
import bcrypt from "bcrypt"
// const bcrypt = require('bcrypt');
const saltRounds = 10;

// Underscore
// import _ , {map} from "underscore"
const _ = require('underscore')

router.post('/nuevo-usuario', async (req, res) => {
    const body = {
        nombre: req.body.nombre,
        email: req.body.email,
        role: req.body.role
    }

    body.pass = bcrypt.hashSync(req.body.pass, saltRounds);

    try {
        const userDB = await User.create(body);
        return res.json(userDB)
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio un error',
            error
        });
    }
});

// GET users listing
router.get('/', function (req, res, next) {
    res.send('respond with a resolve');
});

// PUT usuario
router.put('/usuario/:id', [verificarAuth, verificarAdministrador], async (req, res) => {
    const _id = req.params.id;
    const body = _.pick(req.body, ['nombre', 'email', 'pass', 'activo']);
    if (body.pass) {
        body.pass = bcrypt.hashSync(req.body.pass, saltRounds);
    }
    try {
        const usuarioDB = await User.findByIdAndUpdate(_id, body, { new: true, runValidators: true });
        return res.json(usuarioDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

module.exports = router;