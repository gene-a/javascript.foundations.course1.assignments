// Values and Variables
const country = 'Philippines';
const continent = 'Asia'
const phPopulation = 100000;
console.log('I live in ' + country + ' that is in ' + continent + ' with a population of ' + phPopulation);

// Data Types, let, const, var
const isIsland = false;
const langauge = 'Filipino';
console.log(isIsland, phPopulation, country, langauge);

// Basic Operators
const halfPop = phPopulation / 2;
console.log(++phPopulation);
const finlandPop = 6000000;
const isFinlandMorePopulated = finlandPop > phPopulation; 
const avgPop = 33000000;
const isPhPopMoreThanAvg = phPopulation > avgPop;
const description = 'Portugal is in Europe, and its 11 million people speak portuguese'

// Strings and Template Literals
const descriptionLiteral = `Portugal is in Europe and its 11 million people speak portuguese`

// Taking Decisions: if / else Statements
const portugalPop = 11000000;
const isMyComuntryPopGreaterThanPortugalPop = phPopulation > portugalPop;
if (isMyComuntryPopGreaterThanPortugalPop) {
    console.log(`Portugal's population is above average`);
} else {
    console.log(`the 22 is the average of 33 minus the country's population`);
}

// Type conversion and Coercion
// 1. 4
// 2. 617
// 3. 23
// 4. false
// 5. 1143

// Equality Operators
// const numNeighbors = prompt (`How many neighbor countries does your country have?`);
// if (numNeighbors == 1) {
//     console.log(`Only 1 border!`);
// } else if (numNeighbors > 1) {
//     console.log(`More than 1 border!`);
// } else {
//     console.log(`No borders!`);
// }

// Logical Operators
const sarahMinimumPop = 50000000;
const sarahLangReq = 'english'
const countryPop = prompt(`What is your country's pop?`);
const countryLang = prompt(`What is your country's language?`);
const isCountryAnIsland = prompt(`Is your country an island?`);
const countryName = prompt(`What is the name of the country?`);
if (countryPop >= sarahMinimumPop && sarahLangReq === countryLang.toLowerCase() && !isCountryAnIsland) {
    console.log(`You should live in ${countryName}`);
} else {
    console.log('You should live in Canada or Portugal!');
}

// The switch statement
switch (countryLang.toLowerCase()) {
    case `mandarin`:
    case 'chinese':
        console.log(`most spoken`);
        break;
    case 'spanish':
        console.log(`2nd most spoken`);
        break;
    case 'english':
        console.log(`3rd most spoken`);
        break;
    case 'hindi':
        console.log(`4th most spoken`);
        break;
    case 'arabic':
        console.log(`5th most spoken`);
        break;
    default:
        console.log(`great language too`);
        break;
}