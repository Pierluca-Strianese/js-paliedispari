

while (scelta == 'pari' || scelta == 'dispari') {
    const scelta = prompt ('Scegli pari o dispari: ');
}

while (num1 >= 1 && num1 <= 5) {
    const num1 = prompt ('Scegli un numero compreso tra 1 e 5: ');
}

const num2 = random (1, 5);

const result = num1 + num2;

if (pari_dispari == scelta) {
    console.log ('Utente ha vinto');
}
else {
    console.log ('Utente NON ha vinto');
}


function random (min, max) {
    const random = Math.floor(Math.random() *  (max - min + 1) ) + min;
    return random;
}

function pari_dispari (result) {
    if (result % 2 == 0) {
        return 'pari';
    }
    else {
        return 'dispari';
    }
}

