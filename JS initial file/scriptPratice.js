//#region CHALLENGE 1
/*const markHeight= 1.69;
const markMass = 78;
let johnHeight = 1.95;
let johnMass = 92;
let markHeigherBMI;

//TEST DATA 1
let BMIm = markMass/(markHeight * markHeight);
let BMIj = johnMass/(johnHeight * johnHeight);
console.log(BMIm + "->Mark", BMIj + "->John");

markHeigherBMI = BMIm > BMIj;
console.log(markHeigherBMI);*/
//#endregion

//#region  CHALLENGE 3
/*const averageDolphins = (96 + 108 + 89)/3;
const averageKoals = (88 + 91 + 100)/3;
const miniumScore = 100;

if((averageDolphins > averageKoals) && averageDolphins > miniumScore){
    console.log("Dolphins Win");
}
else if((averageKoals > averageDolphins) > miniumScore){
    console.log("Koals Win");
}
else if((averageDolphins === averageKoals) >= miniumScore) {
    console.log("Both Lose");
}
else {
    console.log("All Lose");
}
*/
//#endregion

const bill = 55;
const tip = bill >= 50 && bill <= 300 ? bill*0.15 : bill*0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}`);