/* 

L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

*/

// Utente deve scegliere un numero da 1 a 5
/* const userNumber = Number(prompt('Scegli un numero da uno a 5')) */

const userNumber = 4

//Generiamo un numero da 1 a 5 per il computer (funzione)

function numberGenerator1To5 () {
    pcRandom = Math.ceil(Math.random() * 5)
    
    return pcRandom
}

const pcNumber = numberGenerator1To5()

//Sommiamo i due numeri
const sum = (userNumber + pcNumber)
console.log(`The sum of the numbers is ${sum}`)


// Stabilire se la somma dei due numeri è pari o dispari (funzione)
function oddOrEven () {
    if (sum % 2 === 0) {
        return true
    } else {
        return false
    }
}

const fightResult = oddOrEven()
if (fightResult == true) {
    console.log('The sum of the numbers is even');
} else {
    console.log('The sum of the numbers is odd');
}

// Dichiarare chi ha il numero più alto e quindi ha vinto

if (userNumber > pcNumber) {
    console.log(`You WIN: your number is ${userNumber} and the pc number is ${pcNumber}`);
    
} else if (userNumber < pcNumber) {
    console.log(`You LOSE: your number is ${userNumber} and the pc number is ${pcNumber}`);
} else {
    console.log(`You have DRAW: your number is ${userNumber} and the pc number is ${pcNumber}`);
}