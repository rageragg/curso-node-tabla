
import { writeFileSync } from 'node:fs';
import colors from 'colors';

const crearArchivo = async( base = 1, list = false )  => {

    let resultado = 0;
    let salida = '';
    let titulo = '';

    console.clear();

    titulo = `================================\n`;
    titulo += `TABLA DE MULTIPLICAR DEL ${base}\n`;
    titulo +=`================================\n`

    for (let index = 0; index < 10; index++) {
        
        resultado = base * (index + 1);
        salida += `${ base } x ${ index + 1} = ${resultado}\n`;

    }

    salida = titulo + salida;

    writeFileSync(`./outputs/tabla-${base}.txt`, salida, (err) => {
        if (err) throw err;
    }); 

    // listar
    if(list) {

        console.log(salida);

    }
    
    return `The file tabla-${base}.txt has been saved!`.green;
    
}

export  { 
    crearArchivo 
}