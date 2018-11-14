function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


/**
* Get an array with car objects with random color and speed
* @param {integer} numberOfCars - The number of cars
* @returns {array} Array containing the car objects
*/
function generateCars(numberOfCars) {
  const cars = [];

  const carMakes = ['Honda', 'BMW','Fiat','Skoda','Volvo'];
  const carColors = ['lightgrey', 'lightcyan','lightyellow','lightgreen','lightcoral','lightpink'];

  for (let i = 0; i < numberOfCars; i++) {
      const car = {};
      const randomMakeIndex = randomIntFromInterval(0, carMakes.length - 1);
      const randomColorIndex = randomIntFromInterval(0, carColors.length - 1);

      car.make = carMakes[randomMakeIndex];
      car.color = carColors[randomColorIndex];
      car.speed = randomIntFromInterval(0, 100);

      cars.push(car);
  }

  return cars;
}



const speedy = generateCars(10);
console.log(speedy);

const carsBetween30and60 = speedy.filter(  car => {return car.speed >30 && car.speed<60;});
console.log(carsBetween30and60);

const carsNotLightYellow = speedy.filter( car => {return car.color != "lightyellow";});
console.log(carsNotLightYellow);

const ObjectDanishKeys = speedy.map(car => {
const danishObj={
maerke:car.make,
farve:car.color,
fart:car.speed
}
return danishObj;
});
console.log(ObjectDanishKeys);