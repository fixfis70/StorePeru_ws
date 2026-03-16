const db = require("./conx");
const express = require('express');
// objeto ruta creado ⬇️
const router = express.Router();

//el getter
router.get("/",(input,output)=>{
    const sql = `SELECT * FROM productos`;

    db.query(sql,(err,result)=>{
        if(err){
            return output.status(500).send(err);
        }
        return output.status(200).json(result);
    })
})

router.post("/", (input, output) => {
    const {producto,descripcion,precio,stock,garantia,id_marca} = input.body;
    const sql = `INSERT INTO productos (producto,descripcion,precio,stock,garantia,id_marca) VALUES (?,?,?,?,?,?)`;

    db.query(sql,[producto,descripcion,precio,stock,garantia,id_marca],(err,result)=>{
        if(err){
            return output.status(500).send({
                mensaje: err.message
            });
        }
        return output.status(200).send({
            mensaje: "Producto registrado",
            producto: result.insertId
        });
    })
})


//se guarda pa ser usado en index.js
module.exports = router