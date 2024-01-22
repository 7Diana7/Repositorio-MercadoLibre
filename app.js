const express = require("express")
const app = express()
const path = require("node:path")

const port = process.env.PORT || 3000;
app.listen(port,() => console.log(`Servidor corriendo en el PORT: http://localhost:${port}`))
//----------------------------º front-end º----------------------------
app.use(express.static(path.resolve(__dirname, './public')))
//----------------------------º Rutas º----------------------------
app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname, "views/home.html"))
})
app.post("/register.html", (req, res) =>{
    res.sendFile(path.join(__dirname, "views/register.html"))
})