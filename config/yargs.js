import yargs from 'yargs';

const argv = yargs(process.argv.slice(2))
    .option({
        'b': {
            alias: 'base',
            demandOption: true,
            default: '1',
            describe: 'base para el calculo',
            type: 'number'
        },
        'l': {
            alias: 'list',
            demandOption: true,
            default: true,
            describe: 'Listar en consola',
            type: 'boolean'
        }
    })
    .check((argv, options) => {
        const b = argv.b
        if (b >= 1 && b <= 10 ) {
            return true // tell Yargs that the arguments passed the check
        } else {
            throw new Error('Los valores permitidos para base son desde 1 hasta 10')
        }
    })
    .argv;

export  { 
    argv 
}