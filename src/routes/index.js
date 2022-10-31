//rota index
module.exports = (app) => {
    app.get('/', (req,res) => {
        res.send("Home")
    })
}