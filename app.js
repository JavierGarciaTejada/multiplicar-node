const { crearArchivo, listarTabla } = require('./multiplica/multiplica');
const { argv } = require('./config/yargs.js');
const colors = require('colors/safe');

let command = argv._[0];

switch (command) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${colors.green(archivo)}`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}