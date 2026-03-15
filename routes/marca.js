const db = require("./conx");
const express = require('express');
//objeto rutas ⬇️
const router = express.Router();

//getter
router.get("/",(
    req,
    res)=>{
    res.send({
        prueba:"HOla mundo"
    })
})

// exporto la ruta para poder utilizarla en el index.js
module.exports = router