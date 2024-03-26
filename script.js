/*

Simple Interaktion mit dem Benutzer:

Ausgabe mit alert(), Eingabe mit prompt() - wie alert aber mit Eingabe als return, Ja/Nein-Frage mit confirm() - wie alert aber mit OK/Abbrechen-Button

*/

// let randomNumber = Math.floor(Math.random()*101);
//
// let insertion = prompt("Please insert your guess between 1 and 100:")
// let chosenNumber = parseInt(insertion);
//
// while (chosenNumber !== randomNumber) {
//     if (isNaN(chosenNumber)){
//         insertion = prompt("Please insert a valid number between 1 and 100:")
//         if (insertion === null)
//             break;
//         chosenNumber = parseInt(insertion);
//         continue;
//     }
//     insertion = prompt(
//         `Your guess is ${chosenNumber > randomNumber ? "higher" : "lower"} than the actual number.\nPlease insert another one:`);
//     if (insertion === null)
//         break;
//     chosenNumber = parseInt(insertion)
// }
// alert(`You've won! The number is ${randomNumber}!`)



let randomNumber = Math.floor(Math.random()*10)+1;
let chosenNumber = -1;
let chosenNumberText, insertion = "";

do {
    insertion = prompt(chosenNumberText + "Please insert a valid number between 1 and 100:");
    chosenNumber = parseInt(insertion);

    if (insertion === null)
        break;
    if (chosenNumber > 100 || chosenNumber < 1) {
        chosenNumberText = "The chosen number is not in the given range.\n";
        continue;
    }
    if (isNaN(chosenNumber)){
        chosenNumberText = "That is not a valid number\n";
        continue;
    }

    chosenNumberText = `Your guess is ${chosenNumber > randomNumber ? "higher" : "lower"} than the actual number.\n`;
} while  (chosenNumber !== randomNumber)
if (insertion !== null)
    alert(`You've won! The number is ${randomNumber}!`)
// console.log(`End: chosen number: ${chosenNumber}, random number: ${randomNumber}`);