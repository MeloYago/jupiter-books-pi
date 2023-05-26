const produtosModel = require('../models/produtos.model')

function homePage(req, res) {
    res.render('home')
}

async function requererProdutos(req, res) {

    let produtos = await produtosModel.obterLivros()
    res.render('produtos', { produtos })

}

async function requererTelaDeDetalhesDoProduto(req, res) {

    const { idProduto } = req.params
    let produto = await produtosModel.obterLivroPelaId(idProduto)
    res.render('detalhesProduto', { produto })
}

function telaDeCadastro(req, res) {
    res.render('cadastrarProduto')
}

function cadastrarProdutos(req, res) {
    const { nome, autor, categoria, sinopse, preco } = req.body

    const novoLivro = {
        nome,
        autor,
        categoria,
        sinopse,
        preco
    }

    try {
        produtosModel.criar(novoLivro)
        res.redirect('/modProduct')
    }
    catch (error) {
        res.send(error)
    }
}

function modificarProduto(req, res) {
    res.render('modificarProduto')
}

function telaAtualizar(req, res) {
    res.render('atualizarProduto')
}

function atualizarBook(req, res) {
    const {  nome, autor, categoria, sinopse, preco, id } = req.body

    const Livro = {
        nome,
        autor,
        categoria,
        sinopse,
        preco,   
        id
    }

    try {
        produtosModel.atualizarLivro(Livro)
        res.redirect('/modProduct')
    }
    catch (error) {
        res.send(error)
    }
}

async function excluirLivro(req, res) {
    const { id } = req.body;

    const livroExcluido = await produtosModel.deletarLivro(id)

    try {
        res.redirect('/modProduct')
    }
    catch (error) {
        res.send(error)
    }
}

module.exports = { 
    homePage , 
    requererProdutos, 
    requererTelaDeDetalhesDoProduto, 
    cadastrarProdutos, 
    telaDeCadastro,
    modificarProduto,
    telaAtualizar,
    atualizarBook,
    excluirLivro
 }