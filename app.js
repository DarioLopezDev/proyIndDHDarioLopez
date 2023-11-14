const express = require('express');
const app = express();
const port = 3000
const path = require (`path`)

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, './views/home.html'))
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/login.html'))
})

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/register.html'))
})

/*||||||||||| PARA EVITAR EL ERROR 404 ||||||||||||||*/
app.get('*', (req, res) => {
    res.send(`
    <div>
        <h1>Pagina No Encontrada</h1>
        <a href="/">Regresar al Home</a>    
    </div>
    `)
})

app.listen(port, ()=>{
    console.log(`El servidor esta funcionando en el puerto ${port} http://localhost:${port}`);
})