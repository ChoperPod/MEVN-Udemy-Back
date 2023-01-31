const jwt = require('jsonwebtoken');

const verificarAuth = (req, res, next) => {
    const token = req.get('token')
    // console.log('El token generado es: ' + token)
    jwt.verify(token, 'secret', (err, decoded) => {

        if (err) {
            return res.status(401).json({
                mensaje: 'Error de token',
                err
            })
        }

        // Crea una propiedad con la info de usuario
        req.usuario = decoded.data;
        next();
    })
}

// Verifica quer el rol sea = a ADMIN
const verificarAdministrador = (req, res, next) => {
    const rol = req.usuario.role;
    console.log(rol);

    if (rol !== 'ADMIN') {
        return res.status(401).json({
            mensaje: 'Rol no autorizado!'
        })
    }

    next();
}
module.exports = { verificarAuth, verificarAdministrador };