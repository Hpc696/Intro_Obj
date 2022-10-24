const Ships = require('./Ships.js');
const prompt=require('prompt-sync')();

let NaveCacca = new Ships(1, prompt("Inserisci il nome della 1^nave "), 3, 'poop');
let NavePipi = new Ships(2, prompt("Inserisci il nome della 2^nave "), 5, 'peep');
console.log(NaveCacca.name + " è grossa "+ NaveCacca.size + " di colore " + NaveCacca.getColor());
console.log(NavePipi.name + " è grossa "+ NavePipi.size + " di colore " + NavePipi.getColor());