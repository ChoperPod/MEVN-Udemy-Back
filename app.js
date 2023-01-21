import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';

const app = express();

const uri = 'mongodb://localhost:27017/udemy'
//Conexion en la nube
// const uri = 'mongodb+srv://<User_Udemy>:<10531053>@clusterin.q4mhtqw.mongodb.net/Udemy?retryWrites=true&w=majority'

// const options = { useNewUrlParser: true, useCreateIndex: true }
const options = {
    autoIndex: false,
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    family: 4
}

// Codigo para suprimir advertrencia al compilar
mongoose.set('strictQuery', true);

// Conexion a DB
mongoose.connect(uri, options).then(
    () => { console.log('Conectado a DB') },
    err => { console.log(err) }
);

// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// Rutas
// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

app.use('/api', require('./routes/nota'));
app.use('/api', require('./routes/user'));

// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), () => {
    console.log('Example app listening on port: ' + app.get('puerto'));
}); 