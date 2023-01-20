import express from "express";
import res from "express/lib/response";
const router = express.Router();

// Importar el modelo nota
import Nota from "../models/nota";

// Agregar una nota
router.post('/nueva-nota', async (req, res) => {
    const body = req.body;
    try {
        const notaDB = await Nota.create(body);
        res.status(200).json(notaDB);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurio un error',
            error
        })
    }
});

// PUT Actualizar nota
router.put('/nota/:id', async (req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
        const notaDB = await Nota.findByIdAndUpdate(
            _id,
            body,
            { new: true });
        res.json(notaDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

// Get con parametros
router.get('/nota/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const notaDB = await Nota.findOne({ _id });
        res.json(notaDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

// Get con todos los documentos
router.get('/nota', async (req, res) => {
    try {
        const notaDB = await Nota.find();
        res.json(notaDB)
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

// Delete Eliminar una nota
router.delete('/nota/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const notaDB = await Nota.findByIdAndDelete({ _id });
        if (!notaDB) {
            return res.status(400).json({
                mensaje: 'El id no existe',
                error
            })
        }
        res.json(notaDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

// Exportamos la configuracion de express app
module.exports = router;