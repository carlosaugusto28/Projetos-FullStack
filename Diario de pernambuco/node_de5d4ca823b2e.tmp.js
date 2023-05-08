const express = require('express')
const mysql = require('mysql')
const app = express()
const path = require('path')
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: false }))

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'carlos123',
    database: 'teste'
})

conexao.connect ((erro) => {
    if (erro) {
        console.error('Erro ao conectar ao banco de dados: ' + erro.stack)
        return
    }
    console.log('conexão bem-sucedida ao banco de dados!')
})

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.post('/cadastro', (req, res) => {
    const nome = req.body.nome
    const telefone = req.body.telefone
    const idade = req.body.idade
    const senha = req.body.senha
    const email = req.body.email
    const sql = `INSERT INTO registro (nome_cliente, email_cliente, senha_cliente, telefone_cliente, idade_cliente) VALUES ('${nome}','${email}', '${senha}', '${telefone}', '${idade}')`

    conexao.query(sql, (err, result) => {
        if (err) {
            throw err
        }
        res.send('Usuário cadastrado com sucesso!')
    })
})

app.post('/login', (req, res) => {
    const email = req.body.email
    const senha = req.body.senha
    console.log('Email: ', email)
    console.log('Senha: ', senha)
    
    if(!email || !senha){
        return res.status(400).send('Email ou senha Inválidos')
    }
    const sql = `SELECT * FROM registro WHERE email_cliente = '${email}' AND senha_cliente = '${senha}'`

    conexao.query(sql,[email, senha], (err, result) => {
        if(err) {
            throw err
        }
        if (result && result.length > 0){
            res.sendFile(__dirname + '/quiz.html')
        } else {
            res.send('Email ou senha incorretos!')
        }
    })
})

app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000')
})