const { Livros } = require ('../../infra') 

function criar(livro) {
    Livros.create({
        nome: livro.nome,
        autor: livro.autor,
        categoria: livro.categoria,
        sinopse: livro.sinopse,
        preco: livro.preco
    })
}

function atualizar() {

}

function deletar() {

}

async function obterUmLivroPorCategoria (livro) {
    const livroProcurado = await Livro.findOne({
        where: {
            categoria: livro.categoria,
        }
    })

    return livroProcurado
}

module.exports = {
    criar,
    atualizar,
    deletar,
    obterUmLivroPorCategoria
}