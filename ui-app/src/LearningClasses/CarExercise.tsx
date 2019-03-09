import { inherits } from "util";

// Exercise 1 - How was your TypeScript Class?
class Car {
    private name: string = ''
    public acceleration: number = 0

    constructor(name: string) {
        this.name = name
    }

    public honk = (): void => {
        console.log("Toooooooooot!");
    }

    public accelerate = (speed: number): void => {
        this.acceleration = this.acceleration + speed;
    }
}
// function Car(name) {
//     this.name = name;
//     this.acceleration = 0;

//     this.honk = function () {
//         console.log("Toooooooooot!");
//     };

//     this.accelerate = function (speed) {
//         this.acceleration = this.acceleration + speed;
//     }
// }
var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

// Exercise 2 - Two objects, based on each other ...
class BaseObject {
    protected width: number = 0
    protected length: number = 0

    public calcSize = (): number => {
         return this.width * this.length;
    }



}

class Rectangle extends BaseObject {
    constructor() {
        super()
        this.width = 4
        this.length = 6
    }
}
// var baseObject = {
//     width: 0,
//     length: 0
// };
// var rectangle = Object.create(baseObject);
// rectangle.width = 5;
// rectangle.length = 2;
// rectangle.calcSize = function () {
//     return this.width * this.length;
// };
console.log(new Rectangle().calcSize());

// // Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
// var person = {
//     _firstName: ""
// };
// Object.defineProperty(person, "firstName", {
//     get: function () {
//         return this._firstName;
//     },
//     set: function (value) {
//         if (value.length > 3) {
//             this._firstName = value;
//         }
//         else {
//             this._firstName = "";
//         }
//     },
//     enumerable: true,
//     configurable: true
// });
// console.log(person.firstName);
// person.firstName = "Ma";
// console.log(person.firstName);
// person.firstName = "Maximilian";
// console.log(person.firstName);


export default {};