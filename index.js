const express = require('express');
const bodyParser = require('body-parser');
const marca = require("./routes/marca");

const app = express()

app.use(bodyParser.json())

app.use("/marca",marca)



app.listen(25568, ()=>{
    console.log(
        "Escuchando el puerto 25568, waa"
    )
})

