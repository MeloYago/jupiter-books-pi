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

function atualizarUser(usuarioAtualizado) {
    Usuario.update({
        nome: usuarioAtualizado.nome,
        telefone: usuarioAtualizado.telefone,
    },
        {
            where: {
                id: usuarioAtualizado.id,
            }
        })
}

function atualizarCredencial(credencialAtualizada) {
    Credencial.update({
        email: credencialAtualizada.email,
        senha: credencialAtualizada.senha,
    },
        {
            where: {
                id: credencialAtualizada.id,
            }
        })
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

function deletarUsuario(id) {
    Usuario.destroy({
        where: {
            id
        }
    })
}

function deletarCredencial(id) {
    Credencial.destroy({
        where: {
            id
        }
    })
}

module.exports = {
    criar,
    atualizarUser,
    deletarUsuario,
    obterUmaCredencial,
    atualizarCredencial,
    deletarCredencial
}