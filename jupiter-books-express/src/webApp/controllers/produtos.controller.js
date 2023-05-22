const produtosModel = require ('../models/produtos.model')

function requererProdutos (req, res){
    res.render('produtos')
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
        res.redirect('/cadastrar_produtos')
    }
    catch (error) {
        res.send(error)
    }
}

function cadastrar_produtos(req, res) {
    res.render('cadastrarProduto')
}

module.exports = { requererProdutos, cadastrarProdutos, cadastrar_produtos }