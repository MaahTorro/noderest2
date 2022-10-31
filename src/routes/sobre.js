// rota sobre
module.exports = (app) => {
    app.get('/sobre', (req,res) => {
        res.send("Sobre")
    })
}