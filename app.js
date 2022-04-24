const yargs = require("yargs");
const colors = require("colors");
const { hideBin } = require("yargs/helpers");
const rutas = require("./routes");

const oprs = {
    operador: {
        describe: "suma/multiplicacion",
        demandOption: true,
        default: "Ingresa Operador",
        type: "string",
    },
    base: {
        describe: "tabla requerida",
        demandOption: true,
        type: "number",
    },
    limite: {
        describe: "limite de tabla",
        default: 10,
        type: "number",
    },
};
yargs
    .command({
        command: "operacion",
        describe: "ingresa la Operacion deseada",
        oprs,
        handler: (argv) => {
            console.log("Log works!");
            funcion(argv);
        },
    })
    .command({
        command: "saludo",
        describe: "saludo",
        builder: {
            user: {
                describe: "nombre",
                type: "string",
                demandOption: true,
                default: "Ingres el Nombre de Usuario",
            },
            pass: {
                describe: "password",
                type: "number",
                demandOption: true,
                default: "Ingres el Password de Usuario",
            },
        },
        handler: (argv) => {
            console.log("Comando Saludo");
            console.log(argv);
        },
    });
const funcion = (data) => {
    rutas.inicio(data.operador, data.base, data.limite).then().catch(console.log);
};
yargs.help();
yargs.parse();