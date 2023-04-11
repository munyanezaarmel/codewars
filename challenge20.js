/*
. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl'
child class of the 'CarCl' class
2. Make the 'charge' property private
3. Implement the ability to chain the 'accelerate' and 'chargeBattery'
methods of this class, and also update the 'brake' method in the 'CarCl'
class. Then experiment with chaining!
Test data:
§ Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%
*/


class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    console.log(`the acceleration of ${this.make} is ${this.speed * 10}`);
  }
  brake() {
    console.log(`the acceleration of ${this.make} is ${this.speed / 10}`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    return speed * 1.6;
  }
}
const us = new CarCl("ford", 120);
console.log(us.speedUS);
console.log(us.accelerate());

class EVCl extends CarCl {
    #charge;
    constructor(make, speed, charge) {
        super(make, speed)
        this.charge=charge
    }
  accelerate() {
    console.log(`the acceleration of ${this.make} is ${this.speed * 10}`);
    return this;
  }
  brake() {
      console.log(`the acceleration of ${this.make} is ${this.speed / 10}`);
      return this
  }
}
const Tesla = new CarCl("RIVIAN", 120)
