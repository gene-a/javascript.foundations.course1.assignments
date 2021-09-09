'use strict';

// Functions
const describeCountry = (country, population, capitalCity) => `${country} has ${population} and its capital city is ${capitalCity}`;
describeCountry('country1', 'popluation1', 'capital1');
describeCountry('country2', 'popluation2', 'capital2');
describeCountry('country3', 'popluation3', 'capital3');

// Function declarations vs expressions
const worldPopulation = 7900;
// Function declaration
function percentageOfWorld1 (population){
    return (population / worldPopulation) * 100;
};

console.log($`pop: ${percentageOfWorld1(1441)}`);
console.log($`pop: ${percentageOfWorld1(1551)}`);
console.log($`pop: ${percentageOfWorld1(1661)}`);

// Function expression
const percentageOfWorld2 = function (population){
    return (population / worldPopulation) * 100;
};

console.log($`pop: ${percentageOfWorld2(1441)}`);
console.log($`pop: ${percentageOfWorld2(1551)}`);
console.log($`pop: ${percentageOfWorld2(1661)}`);

// Arrow functions
const percentageOfWorld3 = (population) => (population / worldPopulation) * 100;
console.log($`pop: ${percentageOfWorld3(1441)}`);
console.log($`pop: ${percentageOfWorld3(1551)}`);
console.log($`pop: ${percentageOfWorld3(1661)}`);

// Functions calling other functions
const describePopulation = function(country, population) {
    return `${country} has ${population}, which is about ${percentageOfWorld3(population)}`;
};

describePopulation('country1', 1441);
describePopulation('country2', 1551);
describePopulation('country3', 1661);

// Introduction to arrays
const populations = [1441, 1551, 1661, 1771];
console.log(populations.length === 4 ? "true, has 4 elements" : "false, does not have 4 elements");
const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];

// Basic Array Operations
const neighbors = ['country1', 'country2', 'country3', 'country4'];
neighbors.push('utopia');
neighbors.pop('utopia');
if (neighbors.includes('germany'.toLowerCase())){
    console.log('Probably not a central European country');
}
const indexOfElementToReplace = neighbors.indexOf('country1');
neighbors[indexOfElementToReplace] = 'country1 replacement';

// Introduction to objects
const myCountry = {
    country : 'country1',
    capital : 'capital1',
    language : 'language1',
    population : 100,
    neighbors : ['neighbor1', 'neighbor2', 'neighbor3']
};

// Dot VS Bracket Notation
console.log(`${myCountry.country} has ${myCountry.population} ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighboring ${myCountry.neighbors.length > 1 ? 'countries' : 'country'} and a capital called ${myCountry.capital}`);

// Object methods
myCountry.describe = function() {
    console.log(`${this.country} has ${this.population} ${this.language}-speaking people, ${this.neighbors.length} neighboring ${this.neighbors.length > 1 ? 'countries' : 'country'} and a capital called ${this.capital}`);
};
myCountry.isIsland = false;
myCountry.checkIsland = function() {
    this.isIsland = this.neighbors.length === 0;
};

// The FOR loop
for (let i = 1; i <= 50; i++) {
    console.log(`Voter number ${i} is voting`);
}

// Looping arrays, breaking, and continuing
const populations2 = [1441, 1551, 1661, 1771];
const percentages2 = [];
for(let i = 0; i < populations2.length; i++) {
    percentages2.push(percentageOfWorld1(populations2[i]));
}

// Looping backwards and loops within loops
const listOfNeighbors = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
for (let i = 0; i < listOfNeighbors.length; i++) {
    for (let j = 0; j < listOfNeighbors[i].length; j++) {
        console.log(`Neighbor: ${listOfNeighbors[i][j]}`);
    }
}

// While loop
const populations3 = [1441, 1551, 1661, 1771];
const percentages3 = [];
let i = 0;
while (populations3.length > i) {
    percentages3.push(percentageOfWorld1(populations3[i]));
    i++;
}