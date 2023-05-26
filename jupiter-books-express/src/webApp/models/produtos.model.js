const { Livros } = require('../../infra')

function criar(livro) {
    Livros.create({
        nome: livro.nome,
        autor: livro.autor,
        categoria: livro.categoria,
        sinopse: livro.sinopse,
        preco: livro.preco
    })
}

function atualizarLivro(livroAtualizado) {
    Livros.update({
        nome: livroAtualizado.nome,
        autor: livroAtualizado.autor,
        categoria: livroAtualizado.categoria,
        sinopse: livroAtualizado.sinopse,
        preco: livroAtualizado.preco,
    },
        {
            where: {
                id: livroAtualizado.id,
            }
        })
}

function deletarLivro(id) {
    Livros.destroy({
        where: {
            id
        }
    })
}

function obterLivros() {

    try {
        const produtos = Livros.findAll()
        return produtos
    }
    catch (error) {
        return error
    }
}

function obterLivroPelaId(idProduto) {

    try {
        const produto = Livros.findByPk(idProduto)
        return produto
    }
    catch (error) {
        return error
    }
}


module.exports = {
    criar,
    atualizarLivro,
    deletarLivro,
    obterLivros,
    obterLivroPelaId
}