const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

//25 APIs, sim 25🥲
//1. retorna uma mensagem de boa vindas
app.get('/api-25/welcome', (req, res) => {
    res.json({ message: 'Bem-vindo à API!' });
    console.log('eeee')
});

//2.instrumentos
app.get('/api-25/instrumentos', (req, res) => {
    res.json([
        { id: 1, name: "Violino", naipe: "Cordas", tom: "do"},
        { id: 2, name: "Trombone", naipe: "Metais", tom: "sib"},
        { id: 3, name: "Tuba", naipe: "Metais", tom: "sib"}
    ])
})

app.post('/api-25/instrumentos', (req, res) => {
    const {name, naipe, tom} = req.body
    res.json({ message: 'Instrumento Adicionado!', instrumento: {name, naipe, tom}})
})

app.put('/api-25/instrumentos/:id', (req, res) => {
    const { id } = req.params
    const { name, naipe, tom} = req.body
    res.json({ message: `Instruemento com o id:${id} autalizado com sucesso!, o derso tirou o pe do freio`, instrumento: { name, naipe, tom}})
})

app.delete('/api-25/instrumentos/:id', (req, res) => {
    const { id } = req.params
    res.json({ message: `Instrumento com id:${id} deletado, o derso travou a obra `})
})

//3. receitas
app.get('/api-25/receitas', (req, res) => {
    res.json([
        { id: 1, nome: "Bolo de Cenoura"},
        { id: 2, nome: "Torta de frango"}
    ])
})
app.post('/api-25/receitas', (req, res) => {
    const { nome } = req.body
    res.json({ message: "Receita adicionada com sucesso!!", receita: {nome}})
})
app.put('/api-25/receitas/:id', (req, res) => {
    const { id } = req.params
    const { nome } = req.body
    res.json({ message: `Receita com id ${id} atualizado`, receita: nome})
})
app.delete('/api-25/receitas/:id', (req, res) => {
    const { id } = req.params
    res.json({ message: `Receitas com id ${id} deletado`})
})

//3.academias na regia
app.get('/api-25/academia', (req, res) => {
    res.json([
        { id: 1, nome: "Splendore", regiao: "Sumare"},
        { id: 2, nome: "FisioFitness", regiao: "Sumare"}
    ])
})
app.post('/api-25/academia', (req, res) => {
    const { nome, regiao } = req.body
    res.json({ message: 'academia adicionada'})
})
app.put('/api-25/academia/:id', (req, res) => {
    const { id } = req.params
    const { nome, regiao } = req.body
    res.json({ message: `Academia atualizada`})
})
app.delete('/api-25/academia/:id', (req, res) => {
    const { id } = req.params
    res.json({ message: `academia deletada`})
})


//4.animal
app.get('/api-25/animal', (req, res) => {
    res.json([
        { id: 1, nome: "Gato"},
        { id: 2, nome: "Peixe"}
    ])
})
app.post('/api-25/animal', (req, res) => {
    const { nome } = req.body
    res.json({ message: "animal adicinado"})
})
app.put('/api-25/animal/:id', (req, res) => {
    const { id } = req.params
    const { nome } = req.body
    res.json({ message: "animal atualizado"})
})
app.delete('/api-25/animal/:id', (req, res) => {
    const { id } = req.params
    res.json({ message: "AnImAl DeLeTaDo"})
})


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})