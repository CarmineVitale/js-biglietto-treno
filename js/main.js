

// Chiedere all'utente quanti km deve percorrere
var km = parseInt(prompt('Inserisci i km che desideri percorrere' , 100));

document.getElementById('km').innerHTML = km;

// Chiedre all'utente quanti anni ha
var age = parseInt(prompt('Inserisci la tua età' , 22));

document.getElementById('anni').innerHTML = age;



var totale = 0.21 * km;


var sconto20 = (1 - 0.2) * totale;


var sconto40 = (1 - 0.4) * totale;


if (age < 18 ) {
  document.getElementById('acquisto').innerHTML = sconto20 + '.' + ' ' + ' <br> Essendo un bimbetto hai diritto ad uno sconto del 20%';
} else if ( age > 65) {
  document.getElementById('acquisto').innerHTML = sconto40 + '.' + ' ' + ' <br> Essendo vecchio hai diritto ad uno sconto del 40%';
} else {
  document.getElementById('acquisto').innerHTML = totale;
}
