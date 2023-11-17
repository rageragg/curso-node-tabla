import { crearArchivo } from "./helpers/multiplicar.js";
import { argv } from "./config/yargs.js"

// tabla de multiplicar por 5
// const base = 5

console.log( JSON.stringify(argv) );

// const [path, path_local, arg3 = 'base=1'] = process.argv;
// const [param_name, param_value] = arg3.split('=');
// console.log( param_name, param_value );

console.log( argv.base, argv?.list );

crearArchivo(argv.base, argv?.list)
     .then( (msg) => console.log(msg))
     .catch( (err) => console.log(err));