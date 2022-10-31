//importando as configurações do sevidor 
const {app, port} = require('../servidor')

// rotas
const index = require('./routes/index')(app)
const sobre = require('./routes/sobre')(app)

// escuta do servidor 
app.listen(port, () =>{
    console.log(`Servidor funcuinando em: http://localhost:${port}`)
})