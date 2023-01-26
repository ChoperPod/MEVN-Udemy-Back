import mongoose from "mongoose";
const uniqueValidator = require('mongoose-unique-validator');

//Roles
const roles = {
    values: ['ADMIN','USER'],
    message: '{VALUE} no es un rol valido'
}

const Schema = mongoose.Schema;

const userSchema = new Schema({
    nombre: {type: String, required: [true, 'El nombre es necesario']},
    email: {type: String, unique: true, required: [true, 'Email es necesario'] },
    pass: {type: String, required: [true, 'Password es necesario']},
    date: {type: Date, default: Date.now},
    role: {type: String, dafault: 'USER', enum: roles},
    activo: {type: Boolean, default: true}
});

// Validator
userSchema.plugin(uniqueValidator, { message: 'Error, esperaba un {PATH} unico.'});

userSchema.methods.toJSON = function (){
    const obj = this.toObject();
    delete obj.pass;
    return obj;
}

// Convertir a modelo
const User = mongoose.model('User', userSchema);

export default User;