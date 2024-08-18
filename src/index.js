const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let letters = [];
    let symbols = [];
    let answer = [];
    let result = '';
    for (let i = 0; i < expr.length; i += 10) {
        letters.push(expr.slice(i, i + 10));
    }

    for (let i = 0; i < letters.length; i++) {
        symbols.length = 0;
        answer.length = 0;
        for (let j = 0; j < 10; j += 2) {
            symbols.push(letters[i].slice(j, j + 2));
        }


        for (let k = 0; k < symbols.length; k++) {
            if (symbols[k] == 11) {
                answer.push('-');
            }
            else if (symbols[k] == 10) {
                answer.push('.');
            }
            else if (symbols[k] == 00) {
                answer.push();
            }
        }
        let morseChar = answer.join('');
        result += MORSE_TABLE[morseChar];
    }
    return result;
}

module.exports = {
    decode
}