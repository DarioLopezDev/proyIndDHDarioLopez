const express = require('express');
const app = express();
const port = 3000
const path = require (`path`)

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, './views/home.html'))
})

app.get('/contacto', (req,res)=>{
    res.sendFile(path.join(__dirname, './views/contacto.html'))
})

app.listen(port, ()=>{
    console.log(`El servidor esta funcionando en el puerto ${port} http://localhost:${port}`);
})