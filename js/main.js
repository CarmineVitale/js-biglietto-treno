

// Chiedere all'utente quanti km deve percorrere
var km = prompt('Inserisci i km che desideri percorrere')
console.log(km);
// Chiedre all'utente quanti anni ha
var age = parseInt(prompt('Inserisci la tua età'));
console.log(age);
// costo biglietto al km
// var prezzo = 0.21;
// console.log(prezzo);


var totale = 0.21 * km;
console.log(totale);


var sconto20 = (1 - 0.2) * totale;


var sconto40 = (1 - 0.4) * totale;

// if (age < 18 ) {
//   console.log(sconto20);
// } else if ( age > 65) {
//   console.log(sconto40);
// } else {
//   console.log(totale);
// }
if (age < 18 ) {
  document.getElementById('acquisto').innerHTML = 'Sei minorenne e quindi hai acquistato il biglietto con uno sconto del 20%' + ' ' + sconto20 + '€';
} else if ( age > 65) {
  document.getElementById('acquisto').innerHTML = 'Sei minorenne e quindi hai acquistato il biglietto con uno sconto del 40%' + ' ' + sconto40 + '€';
} else {
  document.getElementById('acquisto').innerHTML = 'Attaccati al cazzo' + ' ' + totale + '€';
}


// document.getElementById('acquisto').innerHTML = 'Sei minorenne e quindi hai acquistato il biglietto con uno sconto del 20';
