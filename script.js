/*

Simple Interaktion mit dem Benutzer:

Ausgabe mit alert(), Eingabe mit prompt() - wie alert aber mit Eingabe als return, Ja/Nein-Frage mit confirm() - wie alert aber mit OK/Abbrechen-Button

*/

let randomNumber = Math.floor(Math.random()*100)+1;
let attempts = 0;
// let chosenNumber = -1;
// let chosenNumberText, insertion = "";
//
// do {
//     insertion = prompt(chosenNumberText + "Please insert a valid number between 1 and 100:");
//     chosenNumber = parseInt(insertion);
//
//     if (insertion === null)
//         break;
//     if (chosenNumber > 100 || chosenNumber < 1) {
//         chosenNumberText = "The chosen number is not in the given range.\n";
//         continue;
//     }
//     if (isNaN(chosenNumber)){
//         chosenNumberText = "That is not a valid number\n";
//         continue;
//     }
//
//     chosenNumberText = `Your guess is ${chosenNumber > randomNumber ? "higher" : "lower"} than the actual number.\n`;
// } while  (chosenNumber !== randomNumber)
// if (insertion !== null)
//     alert(`You've won! The number is ${randomNumber}!`)
// console.log(`End: chosen number: ${chosenNumber}, random number: ${randomNumber}`);


$("#form").on("submit", (e) => {
    e.preventDefault();

    let insertion = $("input").val();
    let chosenNumber = parseInt(insertion);

    if (chosenNumber > 100 || chosenNumber < 1)
        changeOutputText("The chosen number is not in the given range.");
    else if (isNaN(chosenNumber))
        changeOutputText("That is not a valid number.");
    else if (chosenNumber === randomNumber)
        changeOutputText(`You've won! The number is ${randomNumber}!`);
    else
        changeOutputText(`Your guess is ${chosenNumber > randomNumber ? "higher" : "lower"} than the actual number.`);

    $(".attempts").html(`Versuche : ${++attempts}`);
});

$("#again").on("click", (e) => location.reload())

function changeOutputText (text) {
    $(".output").html(text);
}