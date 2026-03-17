const express = require('express')
const routerTasks = express.Router()

//DATA
const tasks = require('../data/task')

routerTasks.get('/', (req,res)=>{
    res.send(tasks)
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
    res.send("OK")
})


module.exports = routerTasks