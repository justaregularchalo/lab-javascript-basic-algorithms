// Iteration 1: Names and Input


let hacker1 = "Chalo"
console.log(`The hacker's name is ${hacker1}`);

let hacker2 = "Rodrigo";

console.log(`The hacker's name is ${hacker2}`);

// Iteration 2: Conditionals

let hacker1Size = hacker1.length;
let hacker2Size = hacker2.length;

if (hacker1Size > hacker2Size) {
    console.log(`The driver has the longest name, it has ${hacker1Size}characters`)
}
else if (hacker1Size < hacker2Size) {
    console.log(`The navigator has the longest name, it has ${hacker1Size} characters`)
}
 else if(hacker1Size = hacker2Size) {
    console.log(`Wow, you both have equally long names,${hacker2Size} characters!`)
 }

// Iteration 3: Loops

let hackerCapitals = ""
let hackerCapitalsReversed = ""

for (let i = 0; i < hacker1.length; i++) {
    hackerCapitals += hacker1[i].toUpperCase();
   }
   console.log(hackerCapitals);

   for (let i = hacker1.length -1 ; i >= 0; i--) {
    hackerCapitalsReversed += hacker1[i]
   }
   console.log(hackerCapitalsReversed);



   let newOrder = "";

   let minLength = Math.min(hacker1.length, hacker2.length);

for (let i = 0; i < minLength; i++) {
    if (hacker1[i] < hacker2[i]) {
        newOrder = "The driver's name goes first.";
        break;
    } else if (hacker1[i] > hacker2[i]) {
        newOrder = "Yo, the navigator goes first definitely.";
        break;
    } else if (i === minLength - 1) {
        if (hacker1.length < hacker2.length) {
            newOrder= "The driver's name goes first.";
        } else if (hacker1.length > hacker2.length) {
            newOrder = "Yo, the navigator goes first definitely.";
        } else {
            newOrder = "What?! You both have the same name?";
        }
    }
}
console.log(newOrder);
