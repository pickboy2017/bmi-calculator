// //Template Strings
// let name = 'Alpe'
// let birthYear = 1995;
// let year = 2023;
// let job = 'Technician';

// let Alpe = `I'm ${name}, a ${year - birthYear} years's old. My job is a ${job}. `;
// console.log(Alpe);


//person statistic and can vary
// const markHeight = '' //1.69;
// const markMass = '' //78;
//const johnHeight = '' //1.95;
//let johnMass;  //92;

let mass = Number(prompt('Enter your mass (in kg):'));
let height = Number(prompt('Enter your height (in meter):'));
console.log(`John mass value ${mass}kg and height ${height}m.`);
//console.log(typeof johnMass);
//BMI calculation
//const markBmi = markMass / markHeight   ** 2;
const myBmi = mass / height  ** 2;


 console.log("\n");// leave blank space

//console.log("Mark's BMI: " + markBmi );
console.log("You'r BMI: " + myBmi );