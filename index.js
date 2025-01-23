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

//5.alunos
app.get('/api-25/alunos', (req, res) => {
    res.json([
        {id: 1, nome: "Yago"},
        {id: 2, nome: "Kaua"},
        {id: 3, nome: "Neemias"},
        {id: 4, nome: "Diogo"}
    ])
})
app.post('/api-25/alunos', (req, res) => {
    const { nome } = req.body
    res.json({ message: "Aluno adicionado"})
})
app.put('/api-25/alunos/:id', (req, res) => {
    const { id } = req.params
    const { nome } = req.body
    res.json({ message: "Aluno atulizado"})
})
app.delete('/api-25/alunos/:id', (req, res) => {
    const { id } = req.params
    res.json({ message: "Aluno deletado"})
})

//6.carros
app.get('/api-25/carros', (req, res) => {
    res.json([
        {id: 1, marca: "BMW", ano: 2023},
        {id: 2, marca: "Porche", ano: 2020}
    ])
})
app.post('/api-25/carros', (req, res) => {
    const { marca, ano } = req.body
    res.json({ message: "Carro adicionado com sucesso!"})
})
app.put('/api-25/carros/:id', (req, res) => {
    const { id } = req.params
    const { marca, ano } = req.body
    res.json({ message: "Carro atualizado"})
})
app.delete('/api-25/carros/:id', (req, res) => {
    const { id } = req.params
    res.json({ message: "carro deletado"})
})

//7.cpu
app.get('/api-25/cpu', (req, res) => {
    res.json([
        {id: 1, nome: "Intel i3"},
        {id: 2, nome: "R 5 5000"},
        {id: 3, nome: "Intel i7"}
    ])
})
app.post('/api-25/cpu', (req, res) => {
    const { nome } = req.body
    res.json({ message: "Cpu adicionda"})
})
app.put('/api-25/cpu/:id', (req, res) => {
    const { id } = req.params
    const { nome } = req.body
    res.json({ message: "Cpu atualizada"})
})
app.delete('/api-25/cpu/:id', (req, res) => {
    const { id } = req.params
    res.json({ message: "Cpu deletada"})
})
//8.celular
app.get('/api-25/celular', (req, res) => {
    res.json([
        {id: 1, marca: "Samsung"},
        {id: 2, marca: "Apple"},
        {id: 3, marca: "Motorola"}
    ])
})
app.post('/api-25/celular', (req, res) => {
    const { marca } = req.body
    res.json({ message: "Adicionado com sucesso"})
})
app.put('/api-25/celular/:id', (req, res) => {
    const { id } = req.params
    const { marca } = req.body
    res.json({ message: "Atualizado com sucesso"})
})
app.delete('/api-25/celular/:id', (req, res) => {   
    const { id } = req.params
    res.json({ message: "deletado com sucesso"})
})

//9.comida
app.get('/api-25/comida', (req, res) => {
    res.json([
        {id: 1, nome: "Pizza"},
        {id: 2, nome: "Maça"}

    ])
})
app.post('/api-25/comida', (req, res) => {
    const { nome } = req.body
    res.json({ message: "Adicionado"})
})
app.put('/api-25/comida/:id', (req, res) => {
    const { id } = req.params
    const { nome } = req.body
    res.json({ message: "Atualizada"})
})
app.delete('/api-25/comida/:id', (req, res) => {
    const { id } = req.params
    res.json({ message: "deletado"})
})

//10.suplemento
app.get('/api-25/suplemento', (req, res) => {
    res.json([
        {id: 1, nome: "Creatina"},
        {id: 2, nome: "Whey"}
    ])
})  
app.post('/api-25/suplemento', (req, res) => {
    const { nome } = req.body
    res.json({ message: "Suplemento adicionado com sucesso!!!"})
})
app.put('/api-25/suplemento/:id', (req, res) => {
    const { id } = req.params
    const { nome } = req.body
    res.json({ message: "Suplemento atualizado com sucesso!!", nome})
})
app.delete  ('/api-25/suplemento/:id', (req, res) => {
    const { id } = req.params
    res.json({ message: "Suplemento deletado com sucesso!!!"})
})

//11.Petisco
app.get('/api-25/petisco', (req, res) => {
    res.json([
        {id: 1, nome: "joyCook"},
        {id: 2, nome: "JoyBeef"}
    ])
})
app.post('/api-25/petisco', (req, res) => {
    const { nome } = req.body
    res.json({ message: "Adicionado com sucesso", nome})
})
app.put('/api-25/petisco/:id', (req, res) => {
    const { id } = req.params
    const { nome } = req.body
    res.json({ message: "Atualizado com sucesso", nome})
})
app.delete('/api-25/petisco/:id', (req, res) => {
    const { id } = req.params
    res.json({ message: "deletado com sucesso:", id})
})

//12.gpu
app.get('/api-25/gpu', (req, res) => {
    res.json([
        {id: 1, nome: "Rtx 3050"},
        {id: 2, nome: "rtx 2050"}
    ])
})
app.post('/api-25/gpu', (req, res) => {
    const { nome } = req.body
    res.json({ message: "Adicionado com sucesso!!", nome})
})
app.put('/api-25/gpu/:id', (req, res) => {
    const { id } = req.params
    const { nome } = req.body
    res.json({ message: "Atualizado com sucesso", nome})
})
app.delete('/api-25/gpu/:id', (req, res) => {
    const { id } = req.params
    res.json({ message: "Deletado com sucesso", id})
})

//13.fone de ouvido
app.get('/api-25/fone', (req, res) =>{
    res.json([
        {id: 1, nome: "qcy-t13"},
        {id: 2, nome: "soundcore"}
    ])
})
app.post('/api-25/fone', (req, res) =>{
    const { nome } = req.body
    res.json({ message: "Adicionado com sucesso"})
})
app.put('/api-25/fone/:id', (req, res) =>{
    const { id } = req.params
    const { nome } = req.body
    res.json({ message: "Atualizado com sucesso"})
})
app.delete('/api-25/fone/:id', (req, res) =>{
    const { id } = req.params
    res.json({ message: "Deletado com sucesso"})
})

//14.bebidas
app.get('/api-25/bebidas', (req, res) => {
    res.json([
        {id: 1, nome: "coca-cola"},
        {id: 2, nome: "Fanta"}
    ])
})
app.post('/api-25/bebidas', (req, res) => {
    const { nome } = req.body
    res.json({ message: "Adicionado com sucesso!!"})
})
app.put('/api-25/bebidas/:id', (req, res) => {
    const { id }= req.params
    const { nome } = req.body
    res.json({ message: "Atualizado com sucesso!!"})
})
app.delete('/api-25/bebidas/:id', (req, res) => {
    const { id } = req.params
    res.json({ message: "Deletado com sucesso"})
})


//15.Urso
app.get('/api-25/urso', (req, res) => {
    res.json([
        {id: 1, nome: "Polar"},
        {id: 2, nome: "Pardo"}
    ])
})
app.post('/api-25/urso', (req, res) => {
    const { nome } = req.body
    res.json({ message: "Adicionado com sucesso!!!"})
})
app.put('/api-25/urso/:id', (req, res) => {
    const { id } = req.params
    const { nome } = req.body
    res.json({ message: "Atualizado com sucesso!!!"})
})
app.delete('/api-25/urso/:id', (req, res) => {
    const { id} = req.params
    res.json({ message: "Deletado com sucesso"})
})

//16.escola
app.get('/api-25/escola', (req, res) => {
    res.json([
        {id: 1, nome: "Antonio do valle"},
        {id: 2, nome: "Leandro F."}
    ])
})
app.post('/api-25/escola', (req, res) => {
    const { nome } = req.body
    res.json({ message: "Adicionado com sucesso"})
})
app.put('/api-25/escola/:id', (req, res) => {
    const { id } = req.params
    const { nome } = req.body
    res.json({ message: "Atualizado com sucesso"})
})
app.delete('/api-25/escola/:id', (req, res) => {
    const { id } = req.params
    res.json({ message: "Deletado com sucesso"})
})

//17.Lapis
app.get('/api-25/lapis', (req, res) => {
    res.json([
        {id: 1, nome: "faber"},
        {id: 2, nome: "LeoLeo"}
    ])
})
app.post('/api-25/lapis', (req, res) => {
    const { nome } = req.body
    res.json({ message: "Adicionado com sucesso"})
})
app.put('/api-25/lapis/:id', (req, res) => {
    const { id } = req.params
    const { nome } = req.body
    res.json({ message: "Atualizado com sucesso"})
})
app.delete('/api-25/lapis/:id', (req, res) => {
    const { id } = req.params
    res.json({ message: "Deletado com sucesso"})
})

//18.condominio
app.get('/api-25/condominio', (req, res) => {
    res.json([
        {id: 1, nome: "Portal vale das perolas"},
        {id: 2, nome: "Alphaville"}
    ])
})
app.post('/api-25/condominio', (req, res) => {
    const { nome } = req.body
    res.json({ message: "Adicionado com sucesso"}) 
})
app.put('/api-25/condominio/:id', (req, res) => {
    const { id } = req.params
    const { nome }= req.body
    res.json({ message: "Atualizado com sucesso"})
})
app.delete('/api-25/condominio/:id', (req, res) => {
    const {id } = req.params
    res.json({ message: "Deletado com sucesso"})
})

//19.oculos
app.get('/api-25/oculos', (req, res) => {
    res.json([
        {id: 1, nome: "Oakley radar"},
        {id: 2, nome: "Tata martelo"}
    ])
})
app.post('/api-25/oculos', (req, res) => {
    const { nome } = req.body
    res.json({ message: "Adicionado com sucesso"})
})
app.put('/api-25/oculos/:id', (req, res) => {
    const { id } = req.params
    const { nome } = req.body
    res.json({ message: "Atualizado com sucesso"})
})
app.delete('/api-25/oculos/:id', (req, res) => {
    const { id } = req.params
    res.json({ message: "deletado com sucesso"})
})

//20.remedio
app.get('/api-25/remedio', (req, res) => {
    res.json([
        {id: 1, nome: "Dipirona"},
        {id: 2, nome: "bezetacio"}
    ])
})
app.post('/api-25/remedio', (req, res) => {
    const { nome } = req.body
    res.json({ message: "Adicionado com sucesso"})
})
app.put('/api-25/remedio/:id', (req, res) => {
    const { id } = req.params
    const { nome } = req.body
    res.json({ message: "Atualizado com sucesso"})
})
app.delete('/api-25/remedio/:id', (req, res) => {
    const { id } = req.params
    res.json({ message: "deletado com sucesso"})
})


//21
app.get('/api-25/banco', (req, res) => {
    res.json([
        {id: 1, nome: "inter"},
        {id: 2, nome: "itau"}
    ])
})
app.post('/api-25/banco', (req, res) => {
    const { nome } = req.body
    res.json({ message: "Adicionado com sucesso"})
})
app.put('/api-25/banco/:id', (req, res) => {
    const { id } = req.params
    const { nome } = req.body
    res.json({ message: "Atualizado com sucesso"})
})
app.delete('/api-25/banco/:id', (req, res) => {
    const { id } = req.params
    res.json({ message: "deletado com sucesso"})
})

//22.Violino
app.get('/api-25/violino', (req, res) => {
    res.json([
        {id: 1, nome: "Stradivarios"},
        {id: 2, nome: "Guarneri"}
    ])
})
app.post('/api-25/violino', (req, res) => {
    const { nome } = req.body
    res.json({ message: "Adicionado com sucesso"})
})
app.put('/api-25/violino/:id', (req, res) => {
    const { id } = req.params
    const { nome } = req.body
    res.json({ message: "Atualizado com sucesso"})
})
app.delete('/api-25/violino/:id', (req, res) => {
    const { id } = req.params
    res.json({ message: "deletado com sucesso"})
})

//23.sorvete
app.get('/api-25/sorvete', (req, res) => {
    res.json([
        {id: 1, nome: "creme"},
        {id: 2, nome: "uva"}
    ])
})
app.post('/api-25/sorvete', (req, res) => {
    const { nome } = req.body
    res.json({ message: "Adicionado com sucesso"})
})
app.put('/api-25/sorvete/:id', (req, res) => {
    const { id } = req.params
    const { nome } = req.body
    res.json({ message: "Atualizado com sucesso"})
})
app.delete('/api-25/sorvete/:id', (req, res) => {
    const { id } = req.params
    res.json({ message: "deletado com sucesso"})
})

//24
app.get('/api-25/garrafa', (req, res) => {
    res.json([
        {id: 1, nome: "stanley"},
        {id: 2, nome: "termica"}
    ])
})
app.post('/api-25/garrafa', (req, res) => {
    const { nome } = req.body
    res.json({ message: "Adicionado com sucesso"})
})
app.put('/api-25/garrafa/:id', (req, res) => {
    const { id } = req.params
    const { nome } = req.body
    res.json({ message: "Atualizado com sucesso"})
})
app.delete('/api-25/garrafa/:id', (req, res) => {
    const { id } = req.params
    res.json({ message: "deletado com sucesso"})
})

//25.comum ccb
app.get('/api-25/ccb-comum', (req, res) => {
    res.json([
        {id: 1, nome: "virginio Basso"},
        {id: 2, nome: "Jandira"}
    ])
})
app.post('/api-25/ccb-comum', (req, res) => {
    const { nome } = req.body
    res.json({ message: "Adicionado com sucesso"})
})
app.put('/api-25/ccb-comum/:id', (req, res) => {
    const { id } = req.params
    const { nome } = req.body
    res.json({ message: "Atualizado com sucesso"})
})
app.delete('/api-25/ccb-comum/:id', (req, res) => {
    const { id } = req.params
    res.json({ message: "deletado com sucesso"})
})

app.listen(port, () => {('/api-25/suplemento', (req, res) => {

})
    console.log(`Servidor rodando em http://localhost:${port}`)
})