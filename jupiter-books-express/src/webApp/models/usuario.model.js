const { Credencial, Usuario } = require('../../infra')

function criar(usuario) {
    Credencial.create({
        email: usuario.credencial.email,
        senha: usuario.credencial.senha
    }).then((novaCredencial) => {
        Usuario.create({
            nome: usuario.nome,
            telefone: usuario.telefone,
            credencialId: novaCredencial.id
        })
    })
}

function atualizar() {

}

function deletar() {

}

async function obterUmaCredencial(credencial) {
    const usuarioProcurado = await Credencial.findOne({
        where: {
            email: credencial.email,
            senha: credencial.senha
        }
    })

    return usuarioProcurado
}

module.exports = {
    criar,
    atualizar,
    deletar,
    obterUmaCredencial
}