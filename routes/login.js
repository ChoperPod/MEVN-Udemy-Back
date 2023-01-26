import { Express } from "express";
import { router } from "express";
import User from "../models/user";
import bcrypt from "bcrypt";
const saltRounds = 10;

router.get('/', async(req,res) => {
    res.json({mensaje: 'Funciona!'})
})

module.exports = router;