'use strict';

// calcolo del prezzo del biglietto del treno

console.log('questa console viene eseguita');

// - definisco una variabile che chiede quanti km vuole percorrere il passeggero e salvo il valore di un prompt; //kmPassenger

const kmPassenger = Number(prompt('inserisci qui i km che vuoi percorrere'));
console.log({ kmPassenger });

// - definisco una variabile che chiede l'età al passeggero e salvo il valore di un prompt; //age

const age = parseInt(prompt('inserisci qui la tua età'));
console.log({ age });


// - salvo prezzo unitario dei km in una variabile //rate

const rate = 0.21;
console.log(`tariffa al km: ${ rate } €`);

// - definisco una variabile che calcola il prezzo totale del biglietto; //price
// - definisco lo sconto iniziale pari a zero //
let price = Number(kmPassenger * rate);
// console.log('prezzo biglietto:', price);
let priceDiscount = 0;

// - imposto variabile che definisce eta minorenni //ageUnder
// - imposto variabile che definisce eta maggiorenni //ageOver
const ageUnder = 18;
const ageOver = 65;

// - setto una variabile sconto del 20% //discountUnder=20
// - setto una variabile sconto del 40% //discountOver=40
const discountUnder = 20;
const discountOver = 40;


if (age < ageUnder) {
    console.log('utente è minorenne, calcolo sconto del 20%');
    
    priceDiscount = (price / 100 * discountUnder);
    console.log('sconto €:', priceDiscount);
} else if (age > ageOver) {
    console.log('utente è maggiorenne, calcolo sconto del 40%');

    priceDiscount = Number(price * discountOver) / 100;
    console.log('sconto €:', priceDiscount);
}

// cambio varibile let price

price -= priceDiscount;

console.log(`il prezzo finale del biglietto è ${price.toFixed(2)} €`);



//MIO METODO
// //     va applicato uno sconto del 20% per i minorenni

// const discount20 = 20;

// const discountImport20 = Number(fullPrice * discount20) / 100;

// const discountPrice20 = fullPrice - discountImport20;

// //     va applicato uno sconto del 40% per gli over 65.

// const discount40 = 40;

// const discountImport40 = Number(fullPrice * discount40) / 100;

// const discountPrice40 = fullPrice - discountImport40;


// // - IF passeggero ha meno di 18 anni sconto del 20% //prezzo scontato
// // - IF passeggero ha più di 65 anni sconto del 40% //prezzo scontato
// // - ELSE passeggero paga prezzo pieno //fullPrice

// if (age < ageUnder || age > ageOver) {
//     console.log('il passeggero ha diritto ad uno sconto');
//     if (age < ageUnder) {
//         console.log('importo sconto =', discountImport20.toFixed(2)+" € ");
//         console.log('prezzo scontato =', discountPrice20.toFixed(2)+" € ");
//     } else {
//         console.log('importo sconto =', discountImport40.toFixed(2)+" € ");
//         console.log('prezzo scontato =', discountPrice40.toFixed(2)+" € ");
//     }
// } else {


// console.log('vai al carrello');

