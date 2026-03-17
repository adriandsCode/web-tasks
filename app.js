const express = require('express')
const app = express()
const port = 8081

//**MOTOR DE PLANTILLA: simplificación
// para poder usar HTML en nuestra app */
app.set('views', 'views') //Carpeta con plantillas
app.set('view engine', 'ejs') //Motor de plantillas a usar

//NECESARIO PARA USAR POST Y BODYS
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())

//ENDPOINTS
const routerTasks = require('./routers/routersTasks')
app.use('/tasks', routerTasks)

app.listen(port, ()=>{
    console.log('Listen in:', port)
})
