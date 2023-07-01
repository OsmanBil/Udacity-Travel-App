// Setze das Zieldatum des Counters
var zielDatum = new Date('2023-12-30');

// Funktion zum Berechnen der verbleibenden Tage bis zum Zieldatum
function berechneVerbleibendeTage() {
  var heutigesDatum = new Date();
  var verbleibendeZeit = zielDatum - heutigesDatum;
  var verbleibendeTage = Math.ceil(verbleibendeZeit / (1000 * 60 * 60 * 24)); // Umrechnung von Millisekunden in Tage
  return verbleibendeTage;
}

// Aufruf der Funktion und Ausgabe des Ergebnisses
// console.log('Verbleibende Tage bis zum Zieldatum: ' + berechneVerbleibendeTage());
