const fs = require("fs");

const tabla = [];

const suma = (base, limite) => {
    return new Promise((resolve, reject) => {
        for (let i = 0; i <= limite; i++) {
            resultado = i + base;
            tabla.push(`${i} + ${base} = ${resultado}`);
        }
        const datas = JSON.stringify(tabla);
        fs.writeFile(`Suma Tabla del ${base}.txt `, datas, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(tabla);

            }
        });
    });
};

module.exports = {
    suma,
};