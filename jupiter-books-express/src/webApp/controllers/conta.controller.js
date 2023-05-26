const usuariosModel = require('../models/usuario.model')

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

function atualizar(req, res) {
    res.render('atualizarUsuario')
}

function atualizarUsuario(req, res) {
    const { nome, telefone, id } = req.body

    const Usuario = {
        nome,
        telefone,   
        id
    }

    try {
        usuariosModel.atualizarUser(Usuario)
        res.redirect("/modUser")
    }
    catch (error) {
        res.send(error)
    }
}

function atualizarCredencial(req, res) {
    res.render('atualizarCredencial')
}

function atualizarCred(req, res) {
    const {  email, senha, id } = req.body

    const Usuario = {
        email: email,
        senha,   
        id
    }

    try {
        usuariosModel.atualizarCredencial(Usuario)
        res.redirect("/modUser")
    }
    catch (error) {
        res.send(error)
    }
}

function modificarUser(req, res) {
    res.render('modificarUser')
}

async function excluirUsuario(req, res) {
    const { id } = req.body;

    const usuarioExcluido = await usuariosModel.deletarUsuario(id)

    try {
        res.redirect("/modUser")
    }
    catch (error) {
        res.send(error)
    }
}

async function excluirCredencial(req, res) {
    const { id } = req.body;

    const credencialExcluida = await usuariosModel.deletarCredencial(id)

    try {
        res.redirect("/modUser")
    }
    catch (error) {
        res.send(error)
    }
}


module.exports = { 
    autenticar, 
    validarAutenticacao, 
    registrar, 
    cadastrarUsuario, 
    atualizar, 
    atualizarUsuario, 
    atualizarCredencial, 
    atualizarCred, 
    modificarUser,
    excluirUsuario,
    excluirCredencial 
}