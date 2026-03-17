const express = require('express')
const app = express()
const port = 8081

//NECESARIO PARA USAR POST Y BODYS
app.use(express.json())

//ENDPOINTS
const routerTasks = require('./routers/routersTasks')
app.use('/tasks', routerTasks)

app.listen(port, ()=>{
    console.log('Listen in:', port)
})
