const word = prompt('Scrivi una parola: ');

reverseString(word)

palindroma (word,newWord);

function palindroma (word, newWord) {
    if ( word == newWord) {
        console.log ('La parola è palindroma');
    }
    else {
        console.log ('La parola non è palindroma');
    }
}

function reverseString(word) {
    let newWord = '';
    for (let i = word.length - 1; i >= 0; i--) { 
        newWord += word[i];
    }
    return newWord;
}