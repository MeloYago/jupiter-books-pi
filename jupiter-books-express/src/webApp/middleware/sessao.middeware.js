const sessao = require('express-session')

function autorizar() {
    return sessao({
       secret: 'books' 
    })
}

module.exports = {
    autorizar
}

