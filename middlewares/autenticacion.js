const verificarAuth = (req, res, next) => {
    // res.json({
    //     mensjae: 'Dentro del middleware'
    // })

    // Leer headers
    let token = req.get('token');

    console.log(token);

    next();
}

modules.exports = { verificarAuth }