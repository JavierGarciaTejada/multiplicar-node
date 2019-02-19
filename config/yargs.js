const opts = {
    base: {
        alias: 'b',
        demand: true
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Crear un fichero .txt de la tabla de multiplicar con su limite o default 10', opts)
    .help()
    .argv


module.exports = {
    argv
}