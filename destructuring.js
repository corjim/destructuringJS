
//  ***** Object Destructuring *****

// What does the following code return/print?

let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
let { numPlanets, yearNeptuneDiscovered } = facts;

console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 1846


// What does the following code return/print?

let planetFacts = {
    numPlanet: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
};

let { numPlanet, ...discoveryYears } = planetFacts;

console.log(discoveryYears); // {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}


// What does the following code return/print?

function getUserData({ firstName, favoriteColor = "green" }) {
    return `Your name is ${firstName} and you like ${favoriteColor}`;
}

getUserData({ firstName: "Alejandro", favoriteColor: "purple" }) // 'Your name is Alejandro and you like purple'

getUserData({ firstName: "Melissa" }) // 'Your name is Melissa and you like green'

getUserData({}) // 'Your name is undefined and you like green'


//      ****  Array Destructuring  ***


// What does the following code return/print?

let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // Maya
console.log(second); // Marisa
console.log(third); // Chi


// What does the following code return/print?

let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
]

console.log(raindrops); // Raindrops on roses
console.log(whiskers); // whiskers on kittens
console.log(aFewOfMyFavoriteThings); // ['Bright copper kettles', 'warm woolen mittens', 'Brown paper packages tied up with strings']


// What does the following code return/print?

let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // [10, 30, 20]


//  ES5 Assigning Variables to Object Properties

var obj = {
    numbers: {
        a: 1,
        b: 2
    }
};

var a = obj.numbers.a;
var b = obj.numbers.b;

//  Write an ES2015 Version

var { numbers: { a, b } } = obj;


//  ES5 Array Swap

var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

// ES2015 One-Line Array Swap with Destructuring

[arr[0], arr[1]] = [arr[1], arr[0]]



//  Write a function called raceResults which accepts a single array argument. It should return an object with the keys first, second, third, and rest.

const raceResults = ([first, second, third, ...rest]) => ({ first, second, third, ...rest })
