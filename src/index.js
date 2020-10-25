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

function decode(expr) {        

    let arr = expr.split(``);

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === '*') {
            arr.splice(i, 5, '*');
        }
        
    }    
    
    for(let i = 0; i < arr.length; i+=2) {
       if(arr[i]+ arr[i+1] === '00') {
           arr.splice(i, 2, ' ');  
           i-=1; } 
       else if(arr[i]+ arr[i+1] === '10') {
         arr.splice(i, 2, '.');         
         i-=1;        
      }else if (arr[i]+ arr[i+1] === '11'){
        arr.splice(i, 2, '-');                
        i-=1;       
      }      
    }    

    arr = arr.join('').trim().replace(/\s+/g,' ');        
    // console.log(`my arrr2__${arr}`);  
    // console.log(`typeOF__${typeof(arr)}`);  
    
    arr = arr.split('**')
//  console.log(`arr[0] ${arr[0]} arr[1] ${arr[1]}`); 
    let wordConverted = [];
    let messageConverted = [];
    for (i=0; i < arr.length; i++){
        
        arr[i].split("   ").map(function (word) {
            word.split(" ").map(function (letter) {
            wordConverted.push(MORSE_TABLE[letter]);
            });
            wordConverted.join("") 
            wordConverted.push(" ");
            // console.log(`wordConverted__  ${wordConverted}`); 
        });
        messageConverted = messageConverted + wordConverted;        
        // console.log(`messageConverted  ${messageConverted}`);         
    }
    wordConverted = wordConverted.join('');
    console.log(`после for__  ${wordConverted}`); 
    return wordConverted.trim();    
}

module.exports = {
    decode
}

