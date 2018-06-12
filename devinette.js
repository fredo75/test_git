/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme

for (jeu = 1; jeu <= 6; jeu++) {

var nombre_choisi = Number(prompt ("entrez un nombre"));
    
    if (nombre_choisi > solution) {
        console.log ("Trop grand!");}
    
    else if (nombre_choisi < solution) {
        console.log ("Trop petit!");}
    
    else { console.log ("gagné!")}
    
}