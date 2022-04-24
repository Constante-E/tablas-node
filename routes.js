const multi = require("./operaciones/multiplicar");
const suma = require("./operaciones/suma");

const inicio = (operacion, base, limite) => {
    console.log(operacion, base, limite);

    return new Promise((resolve, reject) => {
        switch (operacion) {
            case "suma":
                suma
                    .suma(base, limite)
                    .then((data) => console.log("archivo creado: ", data))
                    .catch(console.log);
                break;

            case "multiplicacion":
                multi
                    .multiplicar(base, limite)
                    .then((data) => console.log("archivo creado: ", data))
                    .catch(console.log);
                break;

            default:
                reject("comando no reconocido");
                break;

        }
        resolve();
    });
};
module.exports = {
    inicio: inicio,
};