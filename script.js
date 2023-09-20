/*-------- Favorite Fruit -----------*/
// let favoriteFruit = prompt("What's your favorite fruit?").toLowerCase();

// if (favoriteFruit === "bananas") {
//     alert("I like bananas as well.");
// } else if (favoriteFruit === "strawberry") {
//     alert("I LOVE strawberries!");

// } else if (favoriteFruit === "grape") {
//     let grapePreference = prompt("Do you prefer purple or green grapes?").toLowerCase();
//     switch (grapePreference) {
//         case "purple":
//             alert("I don't like purple grapes :s.");
//             break;
//         case "green":
//             alert("Green grapes are okay...");
//             break;
//         default:
//             alert("I don't understand...");
//     }
// } else {
//     alert(`I don't understand what you said: ${favoriteFruit}.`);
// };


/*-------- Alternative with ternary equation-----------*/
let favoriteFruit = prompt("What's your favorite fruit?").toLowerCase();
let message;
let grapePreference = prompt("Do you prefer purple or green grapes?").toLowerCase();

message =
    favoriteFruit === "bananas" ? alert("I like bananas as well.") :
    favoriteFruit === "strawberry" ? alert("I LOVE strawberries!") :
    favoriteFruit === "grape" ?
        (
            grapePreference === "purple" ? alert("I don't like purple grapes :s.") : 
            grapePreference === "green" ? alert("Green grapes are okay...") :
            alert("I don't understand...")
        ):
    alert(`I don't understand what you said: ${favoriteFruit}.`);

