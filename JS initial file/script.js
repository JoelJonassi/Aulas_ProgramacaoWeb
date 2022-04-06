/*//let js = "amazing";
//if(js === "amazing") alert("js is awesome"); // Três iguais quando compara para alé do valor, compara o tipo.

console.log(40 + 20); // mostrar dados

let firstName = "Joel";
console.log(firstName);

//let 3years = 3;
let $function = 'qq';

let javascriptfun = true;
console.log(javascriptfun);
console.log(typeof "Joel");
console.log(typeof 20);
javascriptfun = "yes";
console.log(typeof javascriptfun);

let year;
console.log(year);
console.log(typeof year);
console.log(typeof null);*/

//Mudar uma constante resulta em erro
/*let age = 30;
age = 21;
console.log(age);
const birthYear = 2000;
birthYear = 20;*/

/*const now = 2022;
const ageJoel = now - 1999;
const ageEva = now - 2018;

console.log(ageJoel * 3, ageEva / 10);

const firstName = "Joel";
const lastName = "Jonassi";
console.log(firstName + " " + lastName);*/
/*
let x = 10;
console.log(x);

x+= 10;
console.log(x);

const now = 2022;
const ageJoel = now - 1999;
const ageEva = now - 2018;

console.log(ageEva < ageJoel);
const averageA = (ageEva + ageJoel) / 2;
const averageB = ageEva + ageJoel / 2;

console.log(averageA, averageB)
*/

/*const firstName = "Joel";
const job = "teacher";
const birthYear = 1999;
const year = 2022;

//const joel = "I'm" + firstName + ", a" + (year - birthYear) + " year old" +job +"!";
const joel = `'I'm ${firstName}, I have ${year - birthYear} years old, my job is ${job}!`;
console.log(joel);

const age = 15;
 if(age >= 18) {
     console.log("Joel can start driving");
 } else {
     const yearleft = 18 - age;
     console.log(`Sara is too young. Wait another ${yearleft} years`);
 }*/

 /*const inputYear = "1991";
 console.log(inputYear + 18);
 console.log(Number(inputYear), inputYear);
 console.log(Number(inputYear) + 18);
 console.log(Number("Joel"));
 console.log(typeof NaN);

 //Type Coersion
 console.log("23" + "10" + 3);
 console.log("20" + "10" - 3);*/

 //let n = "1" + 1;
 //n = n - 1;
 //console.log(n);

/*console.log(Boolean(0));
console.log(boollean(null));
console.log(Boolean(undefined));
console.log(Boolean(" "));
console.log(Boolean(NaN));*/

/*const money = 100;
if(money ) {
    console.log("Don´t spend it all");
} else{
    console.log("you should get a job");
}*/

/*const age = 18;
if(age == 18) console.log("1");
if(age === 18) console.log("2");

const ageB = "18";
if(ageB == 18) console.log("3");
if(ageB === 18) console.log("4");*/

/*const favourite = Number(prompt("What´s your favourite number"));
console.log(favourite);
if(favourite === 23) {
    console.log("You Win");
} else{
    console.log("You lose");
}*/

/*const hasDiverLicense = true;
const hasGoodVisio = true;
const isTired = true;

if(hasDiverLicense && hasGoodVisio && isTired) {
    console.log("I´m not able to drive");
}else{
    console.log("Able to drive");
}*/


/*const day = 'monday';

switch(day) {
    case 'monday':
        console.log("plan classes");
        break;
    case 'tuesday' :
        console.log("code");
    default:
        console.log("Play time");
    }
*/

//#region Operador trenario
/*const age = 18;
const drink = age >= 18?"Wine":"Water";
console.log(`I like to drink ${age>=18?"Wine":"Water"}`);*/
//#endregion

/*"use strict";
function logger() {
    console.log("My name is joel");
}

logger();*/
// Funtion Declaration - Podemos chamar a função antes de declarar
console.log(fruitProcessor(4,5));
function fruitProcessor(apples, oranges){
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

console.log(fruitProcessor(4,5));
const applejuice = fruitProcessor(10,1);
console.log(applejuice);

// //Funtion Expression - não podemos chamar a função antes de a chamar.

// const age1 = function(birthYear) {
//     return 2022 - birthYear;
// }

// // console.log(age1(1975));

// const age3 = (birthYear => 2022 - birthYear);
// console.log(age3(1975));


function cutPieces(fruit){
    const applePieces = cutPieces(apples);
    const orangesPieces = cutPieces(oragens);
    const juice = `Juice with ${applePieces} apples and ${orangesPieces}`
    return juice;
}

console.log(fruitProcessor(3,5));
const JoelA = [
    "Joel", 22, "Student", ["Good", "Best"]];

const JoelB = {
    firstName: "Joel",
    lastName: "Jonassi",
    birthYear: 1999,
    job: "Student",
    qualities: ["Good","Best"],
    calcAge: function(){
        return 2022 - this.birthYear;
    },
};

const Key = "Name";
console.log(JoelA[0]);
console.log(JoelB.firstName);
console.log(JoelB["lastName"]);
console.log(JoelB[`calcAge`]());