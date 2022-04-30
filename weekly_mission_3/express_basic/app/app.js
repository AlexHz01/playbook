// usando objeto express
const express = require('express')
//app de express
const app = express ()
// puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

//patch inicia, respondera a la url localhost:3000
app.get('/', (req, res) => {
    res.send("Hello World")
})

// respondiendo texto
// localhost:3000/launchx
app.get('/launchx', (req, res) =>{
    res.send('Bienvenidos a launchx')
} )

// regresando un objeto
// localhost:3000/explorersInNode
app.get('/explorersInNode', (req, res) => {
    const explorer = {name: "Explorer", msg: "Hello" }
    res.send(explorer)
})

// con esto inicializamos esta app
app.listen(port,() => {
    console.log(`Example app listening on port ${port}`)
})

// query params: Recibir parameters por la url
// http://localhost:3000/esplorers/kike
// req.params = {"explorerName":"kike"}
app.get('/explorers/:explorerName',(req, res) => {
    res.send(req.params)
})
