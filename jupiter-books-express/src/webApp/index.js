const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const produtosController = require('./controllers/produtos.controller')
const contaController = require('./controllers/conta.controller')

const webApp = express()

webApp.set('views', path.join(__dirname, 'views'))
webApp.set('view engine', 'ejs')

webApp.use(bodyParser.urlencoded({ extended: false }))
webApp.use(bodyParser.json())
webApp.use(express.static(path.join(__dirname, 'public')))

webApp.get('/home', produtosController.homePage)
webApp.get('/produtos', produtosController.requererProdutos)
webApp.get('/produtos/:idProduto', produtosController.requererTelaDeDetalhesDoProduto)
webApp.get('/cadastrar_produtos', produtosController.telaDeCadastro)
webApp.post('/cadastrar_produtos', produtosController.cadastrarProdutos)
webApp.get('/modProduct', produtosController.modificarProduto)
webApp.get('/atualizar_produto', produtosController.telaAtualizar)
webApp.post('/atualizarProduto', produtosController.atualizarBook)
webApp.post('/modProduct/excluir', produtosController.excluirLivro)
webApp.get('/autenticar', contaController.autenticar )
webApp.post('/autenticar', contaController.validarAutenticacao)
webApp.get('/registrar', contaController.registrar)
webApp.post('/registrar', contaController.cadastrarUsuario)
webApp.get('/modUser', contaController.modificarUser)
webApp.post('/modUser', contaController.excluirUsuario)
webApp.post('/modUser/cred', contaController.excluirCredencial)
webApp.get('/atualizar', contaController.atualizar)
webApp.post('/atualizar', contaController.atualizarUsuario)
webApp.get('/atualizar-credencial', contaController.atualizarCredencial)
webApp.post('/atualizar-credencial', contaController.atualizarCred)


webApp.listen('1234', () => console.log('Servidor online'))