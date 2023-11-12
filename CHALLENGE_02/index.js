/**
    "#" Incrementa el valor numérico en 1.
    "@" Decrementa el valor numérico en 1.
    "*" Multiplica el valor numérico por sí mismo.
    "&" Imprime el valor numérico actual.
 */

const ACTIONS = {
    '#': (n, s) => { return {val: n+1, out: s} },
    '@': (n, s) => { return {val: n-1, out: s} },
    '*': (n, s) => { return {val: n*n, out: s} },
    '&': (n, s) => { return {val: n, out: s+n} }
}

function compile(string) {
    let value = 0
    let output = ''

    string.split('').forEach((char) => {
        const { val, out } = ACTIONS[char](value, output)
        value = val
        output = out
    })

    return output
}

const INPUT_STRING = '&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&'
console.log(compile(INPUT_STRING))
