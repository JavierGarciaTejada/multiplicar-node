const fs = require('fs');
const { colors } = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log("==============".green);
    console.log(`Tabla del ${base}`.green);
    console.log("==============".green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`);
    }

}

let crearArchivo = (base, limite = 10) => {


    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject("Formato del parametro base es invalido");
            return;
        }

        let data = [];
        for (let i = 1; i <= limite; i++) {
            data.push(`${base} * ${i} = ${ base * i}\n`);
        }

        let file = `Archivos/tabla-${base}.txt`;
        fs.writeFile(file, data.join(''), err => {
            if (err) reject(err);
            resolve(`tabla-${base}.txt`);
        });

    })

}

module.exports = {
    crearArchivo,
    listarTabla
}