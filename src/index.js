const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const BINARY_TABLE = {
    '10':         '.',
    '11':         '-',
    '**********': ' ',
};

function decode(expr) {
    let letters = [];
    let symbols = [];
    for (let i = 0; i < expr.length; i += 10) {
        letters.push(expr.slice(i, i + 10));
    }
    
    for (let i = 0; i < letters.length; i++) {
        symbols.length = 0;
        for (let j = 0; j < 10; j += 2) {
            symbols.push(letters[i].slice(j, j + 2));
        }
    }
    
    return symbols;
}

module.exports = {
    decode
}