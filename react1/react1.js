//1
const array1 = [34, 89, 77, -28, -67, -55];

let posNums = array1.filter((el) => el> 0);
let numSum = posNums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(numSum);


//2
const array2 = ["giorgi" , "mari", "lasha", "vazha", "giorgi" , "mari", "nino"];

let elements = array2.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue]) {
        accumulator[currentValue]++;
      } else {
        accumulator[currentValue] = 1;
      }
      return accumulator;
    }, []);

console.log(elements);

//3

class Cars {
    constructor(brand, model, speed = 0, motion = "the car is not moving") {
        this.brand = brand;
        this.model = model;
        this.speed = speed;
        this.motion = motion;
    }
  
    check_motion() {
      if (this.speed > 0) {
        this.motion = "the car is moving";
      } else {
        this.motion = "the car is not moving";
      }
    }
  
    accelerate(el) {
      this.speed += el;
      this.check_motion;
    }
    brake(el) {
        this.speed -= el;
        this.check_motion;
      }

    emergency_brake() {
      this.speed = 0;
      this.check_motion;
    }
    status() {
      return ` the car ${this.brand} ${this.model} is moving ${this.speed} km/h of speed and status is : ${this.motion}`;
    }
  }
  
  const car = new Cars("Ford", "Mustang");
  car.accelerate(80);
  car.check_motion();
  
  console.log(car.status());
  
  car.emergency_brake();
  car.check_motion();

  console.log(car.status());

  car.accelerate(100);
  car.check_motion();
  car.brake(30);
  car.check_motion();
  
  console.log(car.status());

  //4
  function addAsync(a, b) {
    return new Promise((resolve, reject) => {
      if (
        a !== undefined && b !== undefined 
        &&  
        typeof a == "number" &&  typeof b == "number"
      ) {
        resolve(a-b);
      } else {
        reject("Reject");
      }
    });
  }
  
  addAsync(30,45)
    .then((resolve) => console.log(resolve))
    .catch((reject) => console.log(reject));
  
    addAsync("20","css")
    .then((resolve) => console.log(resolve))
    .catch((reject) => console.log(reject));