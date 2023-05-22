const usuariosModel = require('../models/usuario.model')


function autenticar(req, res) {
    res.render('autenticar')
}

async function validarAutenticacao(req, res) {
    const { email, senha } = req.body;

    const usuarioEncontrado = await usuariosModel.obterUmaCredencial({
        email,
        senha
    })

    if(usuarioEncontrado){
        res.redirect('/produtos')
    }
    else{
        res.send('Email ou senha inválidos')
    }
}

function registrar(req, res) {
    res.render('cadastrar')
}

function cadastrarUsuario(req, res) {
    const { nome, telefone, email, senha } = req.body

    const novoUsuario = {
        nome,
        telefone,
        credencial: {
            email: email,
            senha
        }
    }

    try {
        usuariosModel.criar(novoUsuario)
        res.redirect("/autenticar")
    }
    catch (error) {
        res.send(error)
    }

}

module.exports = { autenticar, validarAutenticacao, registrar, cadastrarUsuario }