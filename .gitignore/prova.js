'use strict';


// console.log('questa console viene eseguita');

// // if con false non viene presa in considerazione dal browser
//  if (false) {
//      console.log ('sono nell istruzione condizionale');
//  }



// // if else-if else

// const age = 30;
// if (age === 31) {
//     console.log ('sono nell\'istruzione condizionale-1');
// }
// else if (age === 32) {
//     console.log ('sono nell\'istruzione condizionale-2');
// }
// else {
//     console.log ('sono nell\'istruzione condizionale-3');
// }


// console.log ('sono dopo l istruzione condizionale');



// Esercizio: due parole

// Chiediamo all'utente due parole in successione.

//     definisco una variabile parola1 e salvo il valore di un prompt;

const parola1 = prompt('inserisci la prima parola');
console.log('parola1: ', parola1);

//     definisco una variabile parola2 e salvo il valore di un prompt;

const parola2 = prompt('inserisci la seconda parola');
console.log('parola2: ', parola2);

//     definisco una variabile (opzionale) e salvo la lunghezza della parola 1 - lparola1

const lParola1 = parola1.length;
console.log('lunghezza parola1: ', lParola1);

//     definisco una variabile (opzionale) e salvo la lunghezza della parola 2 - lparola2

const lParola2 = parola2.length;
console.log('lunghezza parola2: ', lParola2);

// Andiamo poi a verificare quale delle due parole è più lunga e stampiamo in console un messaggio appropriato.

//     -IF lparola1 > lparola2
//         -stampo parola 1 lunga 
//     -ELSE IF lparola2 > lparola1
//         -stampo parola 2 lunga 
//     -ELSE
//         -stampo le parole hanno la stessa lunghezza

if (lParola1 > lParola2) {
    console.log('la parola 1 è più lunga di parola 2');
    console.log(`${parola1} è più lunga di ${parola2}`);
} else if(lParola2 > lParola1) {
    console.log('la parola 2 è più lunga di parola 1');
    console.log(`${parola2} è più lunga di ${parola1}`);
} else {
    console.log('la parola 1 è lunga come parola 2');
    console.log(`${parola1} è lunga come ${parola2}`);
}
console.log('fine esercizio');