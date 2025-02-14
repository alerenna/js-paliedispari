
/* 

Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

*/

// Creare una variabile con una parola palindroma
const palindroma = 'callac'
console.log(palindroma);


// Creare il meccanismo per decretare se la parola è palindroma

// Faccio il reverse della parola
// La trasformo in una Array
const reverseWord = []

// Ciclo per trovare tutti i caratteri della parola
for (let i = palindroma.length -1; i >=0; i--) {
    const thisPalindroma = palindroma[i]
    reverseWord.push(thisPalindroma)
}
//Ritrasformo in una strina
reverseWord.toString()
// Tolgo le virgole
const reversedWord = (reverseWord.join(''));

// Creo la condizione per definire se la parola e il suo reverse sono uguali, nel qual caso è palindroma, altrimenti no
if (palindroma === reversedWord) {
    console.log(`The word ${palindroma} is a palindrome`);
} else {
    console.log(`The word ${palindroma} is not a palindrome`);
}




// Inserire il meccanismo in una funzione e modificare i parametri per adattarlo alla funzione

// Chiedere all'utente la parola palindroma e sostituirlo con la variabile della parola palindroma