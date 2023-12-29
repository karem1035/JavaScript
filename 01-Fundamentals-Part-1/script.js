/*
// LECTURE: Values and Variables
// 1. Declare variables called 'country', 'continent' and 'population' and
// assign their values according to your own country (population in millions)
// 2. Log their values to the console

const myCountry = 'Egypt';
const continent = 'Africa';
const population = 130000000;
console.log(myCountry);
console.log(continent);
console.log(population);

// LECTURE: Data Types
// 1. Declare a variable called 'isIsland' and set its value according to your
// country. The variable should hold a Boolean value. Also declare a variable
// 'language', but don't assign it any value yet
// 2. Log the types of 'isIsland', 'population', 'country' and 'language'
// to the console

const isIsland = false;
let language;

console.log(isIsland);
console.log(language);

LECTURE: let, const and var
1. Set the value of 'language' to the language spoken where you live (some
countries have multiple languages, but just choose one)
2. Think about which variables should be const variables (which values will never
change, and which might change?). Then, change these variables to const.
3. Try to change one of the changed variables now, and observe what happens


language = 'English';
language = 'Arabic';
console.log(language);

/*
LECTURE: Basic Operators
1. If your country split in half, and each half would contain half the population,
then how many people would live in each half?
2. Increase the population of your country by 1 and log the result to the console
3. Finland has a population of 6 million. Does your country have more people than
Finland?
4. The average population of a country is 33 million people. Does your country
have less people than the average country?
5. Based on the variables you created, create a new variable 'description'
which contains a string with this format: 'Portugal is in Europe, and its 11 million
people speak portuguese'


let halfPopulation = population / 2;
console.log(halfPopulation);
console.log(population + 1);
console.log(population > 33);
let description = 'Egypt is in Africa, and its 130 million people speak Arabic';
console.log(description);


 Write your code below. Good luck! 🙂 
//  Body Mass Index formula: BMI = mass / (height * height) (mass in kg and height in meters).
let massMark = 78;
let heightMark = 1.69;

let massJohn = 92;
let heightJohn = 1.95;

let BMIMark = 78 / (1.69 * 1.69);
let BMIJohn = 92 / (1.95 * 1.95);

console.log(BMIMark);
console.log(BMIJohn);



let scoreDolphins = (97 + 112 + 101) / 3;
let scoreKoalas = (109 + 95 + 106) / 3;

if (scoreDolphins > scoreKoalas) {
	if (scoreDolphins > 100)
	console.log(`Dolphins win the trophy ${scoreDolphins}`);
else console.log(`Dolphins has heigher average ${scoreDolphins}`);
} else if (scoreKoalas > scoreDolphins) {
	if (scoreKoalas > 100) console.log(`Koalas win the trophy ${scoreKoalas}`);
	else console.log(`Koalas has heigher average ${scoreKoalas}`);
} else {
	if (scoreKoalas > 100)
	console.log(`Both win the trophy average: ${scoreKoalas}`);
else
console.log(`Draw but no team wins (score < 100) average: ${scoreKoalas}`);
}


let name = 'karem';

switch (name) {
	case 'ahmed':
		console.log('Not a G');
		break;
		case 'karem':
			console.log('A real G 🎓');
		}
		
		let day = 'monday';
		
		if (day === 'monday') {
			console.log('Plan course structure');
			console.log('Go to coding meetup');
		} else if (day === 'tuesday') {
			console.log('Prepare theory videos');
		} else if (day === 'wednesday' || day == 'thursday') {
			console.log('Write code examples');
		} else if (day === 'friday') {
			console.log('Record videos');
		} else if (day === 'saturday' || day === 'sunday') {
			console.log('Enjoy the weekend :D');
		} else {
			console.log('Not a valid day');
		}
		
		*/