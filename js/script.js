//!Pari e Dispari:
/*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando un'altra funzione)
Dichiariamo chi ha vinto.*/



//?PRIMO ESERCIZIO

//! Faccio scegliere all'utente Pari o Dispari con il prompt e stamparlo in console

const pariDispari=prompt('scegli pari o dispari')
console.log(pariDispari);

//! chiedo all'utente  un numero tra 1 e 5 e stamparlo in console.log
const NumberUser = parseInt(prompt('scegli un numero tra 1 e 5'));
console.log(NumberUser);

//! Inizializzo la variabile pari a zero cosi da poter riutilizzarla per richiamre la funzione 
let pcNumber=0

//! creo la funzione per il numero random per il pc da 1 a 5

function randomNumber(randomNumberPc){
 randomNumberPc = (Math.floor((Math.random(1)*5)+1));
console.log(`il numero random è: ${randomNumberPc}`);
return randomNumberPc
}

//! faccio la somma richiamando la funzione e sommandola al numero intero dell'utente

somma = randomNumber(pcNumber) + NumberUser
console.log(somma)

//?Prima prova sul codice finale

/*//!inizializzo la variabile con stringa vuota per il risultato della funzione pari o dispari(DA RIVEDERE)
let pariDispariGame = '';

function sommaNumber(GameOver){
    if(somma % 2 === 0){
          console.log('pari') 
    }else{
        console.log('dispari')
    }
    return GameOver

}

sommaNumber(pariDispariGame)

//!Faccio l'if per controllare chi ha vinto (DA RIVEDERE)

if (sommaNumber(pariDispariGame) !== pariDispari){
    console.log('Pc win')
}else if (sommaNumber(pariDispariGame) == pariDispari){
    console.log('User win')
}
*/




//? seconda prova sull'ultimo pezzo di codice, cioè rifare la funzione e la condizione

/*function dispariPari(sommaPc){
    if(sommaPc % 2 === 0){
        return true 
  }else{
      return false
  }
  
}

if (dispariPari(somma)){
    console.log('win User')
}else{
    console.log('win Pc')
}*/





//?SECONDO ESERCIZIO
//!Palidroma:
/*Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
E' vietato usare split(), reverse() e simili.*/

/*const wordUser=prompt('inserisci parola')

let wordReverse=wordReverseFunction(wordUser);

if (wordUser == wordReverse){
    console.log('la parola è palindroma');
} else {
  console.log('la parola non è palindroma');
}


function wordReverseFunction (word){
  let wordReverse = ''
 
  let i = word.length -1;

  while (i>= 0){
    wordReverse += word[i];
    i--
  }
  return wordReverse
}*/


