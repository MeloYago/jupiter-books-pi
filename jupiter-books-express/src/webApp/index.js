const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const produtosController = require('./controllers/produtos.controller')
const contaController = require('./controllers/conta.controller')
const sessaoMiddleware = require('./middleware/sessao.middeware')

const webApp = express()

webApp.set('views', path.join(__dirname, 'views'))
webApp.set('view engine', 'ejs')

webApp.use(bodyParser.urlencoded({ extended: false }))
webApp.use(bodyParser.json())
webApp.use(express.static(path.join(__dirname, 'public')))

webApp.get('/produtos', produtosController.requererProdutos)
webApp.get('/cadastrar_produtos', produtosController.cadastrar_produtos)
webApp.post('/cadastrar_produtos', produtosController.cadastrarProdutos)
webApp.get('/autenticar', contaController.autenticar )
webApp.post('/autenticar', contaController.validarAutenticacao)
webApp.get('/registrar', contaController.registrar)
webApp.post('/registrar', contaController.cadastrarUsuario)

webApp.listen('1234', () => console.log('Servidor online'))