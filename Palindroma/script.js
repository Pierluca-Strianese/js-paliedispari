const word = prompt('Scrivi una parola: ');

if (Palindroma(word)) {
    console.log ('La parola è palindroma');
}
else {
    console.log ('La parola NON è palindroma');
}


function Palindroma () {
    let newWord = '';
    for (let i = word.length - 1; i >= 0; i--) { 
        newWord += word[i];
    }

    if (word == newWord) {
        return true;
    }
}