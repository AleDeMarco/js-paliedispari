var scelta = prompt('Pari o dispari?').toLowerCase();

while (scelta != 'pari' && scelta != 'dispari') {
  alert('Scegliere tra pari e dispari!');
  scelta = prompt('Pari o dispari?').toLowerCase();
}

var userN = parseInt(prompt('Inserire un numero da 1 a 5:'));
while (userN < 1 || userN > 5) {
  alert('Inserire un numero tra 1 e 5!');
  userN = parseInt(prompt('Inserire un numero da 1 a 5:'));
}

if (scelta == 'pari') {
  document.getElementById('user-pd').innerHTML = 'pari';
  document.getElementById('pc-pd').innerHTML = 'dispari';
}
else {
  document.getElementById('user-pd').innerHTML = 'dispari';
  document.getElementById('pc-pd').innerHTML = 'pari';
}

document.getElementById('user-num').innerHTML = userN;
var pcN = randomNumber();
document.getElementById('pc-num').innerHTML = pcN;

var somma = userN + pcN;
document.getElementById('tot').innerHTML = somma;

if (pariDispari(somma) == scelta) {
  document.getElementById('win').innerHTML = 'l\'utente!';
}
else {
  document.getElementById('win').innerHTML = 'il computer...';
}


function randomNumber() {
  return Math.floor(Math.random()*5)+1;
}

function pariDispari(somma) {
  if (somma % 2 == 0) {
    return 'pari';
  }
  else {
    return 'dispari';
  }
}
