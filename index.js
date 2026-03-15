const express = require('express');
const bodyParser = require('body-parser');
//obtengo el objeto ruta de marca (importado por la exportacion de module.exports)
const marca = require("./routes/marca");

const app = express()

app.use(bodyParser.json())

// asigno el objeto ruta de marca a la ruta "/marca"
app.use("/marca",marca)

//un simple recibimiento para el "/"
app.get("/",(req,res)=>{
    res.send({
        hola:"mundo"
    })
})

//puerto 25568 pq en mi server le designé este puerto
app.listen(25568, ()=>{
    console.log(
        "Escuchando el puerto 25568, waa"
    )
})

