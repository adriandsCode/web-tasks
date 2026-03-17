const express = require('express')
const routerTasks = express.Router()

//DATA
const tasks = require('../data/task')

routerTasks.get('/', (req,res)=>{
    res.render('pageTasks', 
        {
        today: '17/03/2026',
        tasks: tasks
        }
    )//Para usar plantilla, 
    // render('Nombre de plantilla',{obj}->para enviar info en la plantilla
})

routerTasks.post('/', (req,res)=>{
    let text = req.body.text
    let lastId = tasks[tasks.length-1].id
    tasks.push(
        {
            id:lastId+1,
            text: text
        }
    )
    //Despues de insertar las tareas hace una renavegacion
    res.redirect('/tasks')
})


module.exports = routerTasks