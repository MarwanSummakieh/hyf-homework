//  age calculator:
const yearOfBirth = 1996;
let yearFuture = 2056;
let age = yearFuture - yearOfBirth;
console.log("You will be"+" "+age+" "+"years old in"+" "+yearFuture);
// A dog age calculator:
const dogYearOfBirth = 2007;
const dogYearFuture = 2056;
const dogYear = dogYearFuture - dogYearOfBirth;
const ShowResultInDogYears = true;
if(ShowResultInDogYears){
    console.log("Your dog will be "+dogYear+" dog years old in 2020");
}
else{
  console.log("Your dog will be"+" "+(dogYear*7)+" "+"human years old in 2020");
}
// A house price estimator:
const peterHouseExtimation = (8*10*10*2.5*1000)+(100*300);
const juliaHouseExtimation = (5*11*8*2.5*1000)+(70*300);
let   peterPriceHouse = 2500000;
let   juliaPriceHouse = 1000000;
console.log("Peter's house price':"+" "+peterPriceHouse);
console.log("Julia's house price:"+" "+juliaPriceHouse);

if(peterHouseExtimation>juliaHouseExtimation){
  console.log("Peter is paying"+" "+peterHouseExtimation+"and that is less");
}
else{
  console.log("Julia is paying"+" "+juliaHouseExtimation+"and that is more");
}
