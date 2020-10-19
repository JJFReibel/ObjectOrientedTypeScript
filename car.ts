/*
MIT License

Copyright (c) 2020 Jean-Jacques François Reibel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

class Car {
  public wheels: number;
  public doors: number;
  public cylinders: number;

  public constructor(wheels: number, doors: number, cylinders: number) {
    this.wheels = wheels;
    this.doors = doors;
    this.cylinders = cylinders;
  }

  addWheels(wheels: number) {
    this.wheels += wheels;
  }

  addDoors(doors: number) {
    this.doors += doors;
  }

  addCylinders(cylinders: number) {
    this.cylinders += cylinders;
  }

  deleteWheels(wheels: number) {
    this.wheels -= wheels;
  }

  deleteDoors(doors: number) {
    this.doors -= doors;
  }

  deleteCylinders(cylinders: number) {
    this.cylinders -= cylinders;
  }
}

console.log("Creating car.");
let subaru = new Car(4, 4, 4);
console.log("Wheels check: " + subaru.wheels);
console.log("Doors check: " + subaru.doors);
console.log("Cylinders check: " + subaru.cylinders);
console.log("");
console.log("Adding wheel directly to car object.");
subaru.wheels = 5;
console.log("Wheels check: " + subaru.wheels);
console.log("Doors check: " + subaru.doors);
console.log("Cylinders check: " + subaru.cylinders);
console.log("");
console.log("Removing wheel using class method.");
subaru.deleteWheels(1);
console.log("Wheels check: " + subaru.wheels);
console.log("Doors check: " + subaru.doors);
console.log("Cylinders check: " + subaru.cylinders);
console.log("");