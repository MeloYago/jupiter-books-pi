

const { Sequelize, DataTypes } = require('sequelize')

const database = new Sequelize(
    'prateleira',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
)

const Livros = database.define('livros', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    autor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sinopse: {
        type: DataTypes.STRING,
        allowNull: false
    },
    preco: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
})

const Usuario = database.define('usuarios', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    },
})

const Credencial = database.define('credencial', {
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    },
})

Credencial.hasOne(Usuario)
Usuario.belongsTo(Credencial)

try {
    database.authenticate()
    database.sync()
}
catch (error) {
    console.error(error)
}

module.exports = {
    Livros,
    Credencial,
    Usuario
}