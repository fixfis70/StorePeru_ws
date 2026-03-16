const db = require("./conx");
const express = require('express');
//objeto rutas ⬇️
const router = express.Router();

//getter
router.get("/",(input,output)=>{
    const sql = `SELECT * FROM marca`;

    db.query(sql,(err,result)=>{
        if(err){
            return output.status(500).send(err);
        }
        return output.status(200).json(result);
    })
})

//postter
router.post("/", (input, output) => {
        const {marca} = input.body;

        const sql = `INSERT INTO marca (marca) VALUES (?)`;

        db.query(sql,[marca],(err,result)=>{
            if(err){
                return output.status(500).send({
                    mensaje: err.message
                });
            }

            return output.status(200).send({
                mensaje: "Marca registrada",
                marca: result.insertId
            });

        })
    }
)

// exporto la ruta para poder utilizarla en el index.js
module.exports = router