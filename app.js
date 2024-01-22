const express = require("express")
const app = express()
const path = require("node:path")

app.listen(3000, () => {
    console.log("Comenzando... http://localhost:3000")
})
//----------------------------º front-end º----------------------------
app.use(express.static(path.resolve(__dirname, './public')))
//----------------------------º Rutas º----------------------------
app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname, "views/home.html"))
})
app.post("/register.html", (req, res) =>{
    res.sendFile(path.join(__dirname, "views/register.html"))
})