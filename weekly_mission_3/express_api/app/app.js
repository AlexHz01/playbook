// Usando objeto express
const express = require('express')
// App de Express
const app = express()
app.use(express.json()) // Indicamos que usaremos JSON
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

// HTTP METHODS
app.get('/v1/explores', (req, res) =>{
    console.log(`Api Explorers GET ALL requests ${new Date()}`)
    const explorer1 = {id: 1, name: "kike1"}
    const explorer2 = {id: 2, name: "kike2"}
    const explorer3 = {id: 3, name: "kike3"}
    const explorer4 = {id: 4, name: "kike4"}
    const explorers = [explorer1, explorer2, explorer3, explorer4]
    res.status(200).json(explorers)
})
// GET crea un ednpoint que regresa un explorer miante un id
app.get('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers GET request ${new Date()}`)
    console.log(`Getting explorers whit id ${req.params.id}`)
    const explorer = {id: 1, name: "kike"}
    res.status(200).json(explorer)
})
// Crea un end point que se encargue de crear un explorer
app.post('/v1/explorers', (req, res) =>{
 console.log(`Api Explorers POST request ${new Date()}`)
 const requestBody = req.body //parámetros de un cliente
 res.status(201).json({message: "Created"})
})
// PUT crea un endpoint que se encarga de actualizar un explorer
app.put('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers PUT request ${new Date()}`)
    console.log(`Update explorers whit id ${req.params.id}`)
    const requestBody = req.body // parametros de unc cliente
    res.status(200).json({message: "Updated"})
})

// DELETE crea un endpoint para eliminar un explorer
app.put('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers DELETE request ${new Date()}`)
    console.log(`Delete explorers whit id ${req.params.id}`)
    const requestBody = req.body // parametros de unc cliente
    res.status(200).json({message: "Deleted"})
})
// Con esto inicializamos esta app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})