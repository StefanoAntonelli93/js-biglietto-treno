'use strict';

console.log("questa console viene eseguita");
// Esercizio: pari o dispari
console.log('si dia inizio al "\pari o dispari!"')

// chiedere all'utente se vuole pari o dispari e un numero intero compreso tra 1 e 9. Generare un numero casuale compreso tra 1 e 9, che sarà la giocata del computer. Stabilire e comunicare chi ha vinto secondo le regole di pari o dispari.

// //prima cosa: dati di input

//     definisco una variabile con il valore di un prompt che chiede pari o dispari pari/dispari //SceltaUtentePariDispari
const choise = prompt('scegli pari o dispari');
console.log('choise:', choise);


//     definisco una variabile con un valore di prompt 1-9 - numerico numero dell'utente (1/9) /numeroUtente
const userNumber = Number(prompt('inserisci un numero da 1 a 9'));
console.log('userNumber:', userNumber);


//     definisco una variabile con un valore randomico tra 1 e 9 (valore del computer) /numeroComputer
const pcNumber = Number(Math.floor(Math.random() * 9) + 1);
console.log('pcNumber:', pcNumber);


//     definisco una variabile con la somma di numeroUtente + numeroComputer = totaleNumero
const numbersTotal = Number(userNumber + pcNumber);
console.log('numbersTotal:', numbersTotal);


//     definisco una variabile che ci dice se il valore totaleNumero è pari o dispari //risultatoPariDispari
if (numbersTotal % 2 === 0) {
    console.log('il risultato è un numero pari');
} else {
    console.log('il risultato è un numero dispari');
}
// -SE (risultatoPariDispari === 0 (pari) && SceltaUtentePariDispari === 'pari')
//  vince utente 
// -ELSE SE (risultatoPariDispari !== 0 (dispari) && SceltaUtentePariDispari === 'dispari')
//  vince utente 
// -ELSE 
//  vince computer

if ((numbersTotal % 2 === 0) && choise === 'pari') {
    console.log('HAI VINTO UN MILIONE DI EURO!');
} else if ((numbersTotal % 2 !== 0) && choise === 'dispari') {
    console.log('HAI VINTO UN MILIONE DI EURO!');
} else {
    console.log('PC WINSSSS!');
}

console.log('fine dei giochi.');