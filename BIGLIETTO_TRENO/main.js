'use strict';

// calcolo del prezzo del biglietto del treno

console.log('questa console viene eseguita')

// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

// - definisco una variabile che chiede quanti km vuole percorrere il passeggero e salvo il valore di un prompt; //km percorsi

const kmPassenger = Number(prompt('inserisci qui i km che vuoi percorrere'));
console.log('km percorsi:', kmPassenger);

// - definisco una variabile che chiede l'età al passeggero e salvo il valore di un prompt; //età

const age = parseInt(prompt('inserisci qui la tua età'));
console.log('età passeggero:', age);

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

//     il prezzo del biglietto è definito in base ai km (0.21 € al km)

// - definisco una variabile che moltiplica i km percorsi al prezzo unitario; // prezzo biglietto
const rate = 0.21;
console.log('tariffa al km:', rate +" € ");

const fullPrize = Number(kmPassenger * rate) ;


//     va applicato uno sconto del 20% per i minorenni

let discount20 = 20;

let discountImport20 = Number(fullPrize * discount20) / 100;

let discountPrize20 = fullPrize - discountImport20;

//     va applicato uno sconto del 40% per gli over 65.

let discount40 = 40;

let discountImport40 = Number(fullPrize * discount40) / 100;

let discountPrize40 = fullPrize - discountImport40;
// - IF passeggero ha meno di 18 anni sconto del 20% //prezzo scontato
// - IF passeggero ha più di 65 anni sconto del 40% //prezzo scontato
// - ELSE passeggero paga prezzo pieno //fullPrize

if (age < 18 || age > 65) {
    console.log('il passeggero ha diritto ad uno sconto');
    if (age < 18) {
        console.log ('importo sconto =', discountImport20.toFixed(2)+" € ");
        console.log ('prezzo scontato =', discountPrize20.toFixed(2)+" € ");
    } else {
        console.log ('importo sconto =', discountImport40.toFixed(2)+" € ");
        console.log ('prezzo scontato =', discountPrize40.toFixed(2)+" € ");
    }
} else {
    console.log('prezzo del biglietto = ', fullPrize + " € ");
}

// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
// Questo richiederà un minimo di ricerca.


