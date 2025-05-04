// 20 Exercises based on difficulty
//Difficulty: Beginner (1–7): Basics of Classes and Instances

// 1.Create a class named Car with two properties: brand and model.
// Add a method called getDetails() that returns a string in this format:
// Brand: Tesla, Model: S

class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  getDetails() {
    return `Brand:${this.brand}, Model:${this.model}`;
  }
}

const car = new Car("Tesla", "S");
console.log(car.getDetails()); // Brand: Tesla, Model: S

//2.Create a class MathUtils with a static method add(a, b) that returns the sum of a and b. Try calling the method without creating an instance.

class MathUtils {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtils.add(5, 3)); // 8

//3. Create a class Animal with a method makeSound() that logs "Generic sound".
// Then, create a subclass Dog that overrides makeSound() to log "Woof!".

class Animal {
  makeSound() {
    return "Generic Sound";
  }
}

class Dog extends Animal {
  makeSound() {
    return "Woof!";
  }
}

const myDog = new Dog();
console.log(myDog.makeSound()); //  Woof!

//4. Create a base class Vehicle with a constructor that sets a type property.
// Then, create a class Bike that extends Vehicle and also sets a brand in its constructor.

class Vehicle {
  constructor(type) {
    this.type = type;
  }
}

class Bike extends Vehicle {
  constructor(type, brand) {
    super(type);
    this.brand = brand;
  }
}

const myBike = new Bike("Motorbike", "Yamaha");
console.log(myBike.type); // 👉️ Motorbike
console.log(myBike.brand); // 👉️ Yamaha

//5. Create a class User with a static method role() that returns "User".
// Now, create a class Admin that extends User and overrides the static method role() to return "Admin".

class User {
  static role() {
    return "User";
  }
}

class Admin extends User {
  static role() {
    return "Admin";
  }
}
console.log(User.role()); // 👉️ User
console.log(Admin.role()); // 👉️ Admin

//6. Create a Person class with a method introduce() that returns "Hi, I'm a person."
// Create a Teacher class that extends Person and overrides the introduce() method to return:
//super.introduce() + " I teach JavaScript."

class Person {
  introduce() {
    return `Hi, I', a person. `;
  }
}

class Teacher extends Person {
  introduce() {
    return super.introduce() + "I teach JavaScript.";
  }
}

const t = new Teacher();
console.log(t.introduce()); // 👉️ "Hi, I'm a person. I teach JavaScript."

//7. Write a class MathUtil with static methods add(a, b) and subtract(a, b).
//Call both methods and print their results.

class MathUtil {
  static add(a, b) {
    return a + b;
  }

  static subtract(a, b) {
    return a - b;
  }
}

console.log(MathUtil.add(5, 3)); // 8
console.log(MathUtil.subtract(5, 3)); // 2

// Difficulty:  Intermediate — Exercise 8:
//8. Create a class Animal with a method speak(). Then extend it with a Dog class and override speak() to return "Woof!".
// Create an instance of Dog and call the speak() method.

class Animal2 {
  speak() {
    return "Something";
  }
}

class Dog2 extends Animal2 {
  speak() {
    return "Woof!";
  }
}
const tommy = new Dog2();
console.log(tommy.speak());

//9. Use super() inside a child class ElectricCar that extends Car, and set a new property battery.
// Then create an instance and log all properties.
// Use the following:
// Inherit from your previous Car class that had brand and model.
// Add battery property in ElectricCar.

class Car2 {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  getDetails() {
    return `Brand:${this.brand}, Model:${this.model}`;
  }
}

class ElectricCar extends Car2 {
  constructor(brand, model, battery) {
    super(brand, model);
    this.battery = battery;
  }
}

const myCar = new ElectricCar("Tesla", "S", "85kwh");
console.log(myCar);

// 10. Return a non-object from the constructor of a child class and observe the error.
// Create a Parent class that returns a primitive (like 42) from its constructor — log the result.
// Then create a Child class that extends Parent, calls super(), and also returns 42.

class Parent {
  constructor() {
    return 45; // Doesn't throw TypeError.. It's return is ignored
  }
}

class Child extends Parent {
  constructor() {
    super();
    return 45; // ❌ Throws TypeError..  If a derived constructor returns a non-object (i.e. a primitive), it's invalid, because it violates the construction protocol
  }

  doesntGiveError() {
    return 45; // Doesn't throw TypeError..
  }
}

console.log(new Parent());
// console.log(new Child()); // Throws TypeError

// 11. Create a Counter class with:
// A private field #count (starts at 0)
// A method increment() that increases #count
// A method getCount() that returns the current count

// In JavaScript, a private field in a class is a variable that is only accessible inside the class body — you can't access it from outside the class, not even from subclasses or instances.
class Counter {
  #count = 0;

  increment() {
    this.#count += 1;
  }

  getCount() {
    return this.#count;
  }
}

const c = new Counter();
c.increment();
c.increment();
c.increment();
c.increment();
console.log(c.getCount()); // 👉️ 4
// console.log(c.#count); // ❌ SyntaxError: Private field '#count' must be declared in an enclosing class

// 12. Create a User class with a static method fromJSON() that accepts a JSON string and returns a new User instance.
class User3 {
  constructor(userName) {
    this.userName = userName;
  }
  static fromJSON(jsonString) {
    const data = JSON.parse(jsonString);
    console.log("dataa", data);
    return new User3(data.userName); // we can create instance of same or other class inside the class itself
  }
}

const userJson = '{"userName": "JohnDoe"}';
const user = User3.fromJSON(userJson);
console.log(user.userName); // JohnDoe

//13. Create a class Shape with a method describe() that returns "I am a shape."
// Then, extend it with a Triangle class that adds its own properties (base, height) and overrides the describe() method to return "I am a triangle with base {base} and height {height}."

class Shape {
  describe() {
    return "I am a shape.";
  }
}

class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }

  describe() {
    return `I am a triangle with base ${this.base} and height ${this.height}.`;
  }
}

const shape = new Shape();
console.log(shape.describe()); // 👉️ I am a shape.

const triangle = new Triangle(5, 10);
console.log(triangle.describe()); // 👉️ I am a triangle with base 5 and height 10.

// 14. Write a Database class with a static property connected = false. Add static methods connect() and isConnected().

class Database {
  static connected = false;

  static connect() {
    this.connected = true;
  }

  static isConnected() {
    return this.connected;
  }
}

console.log(Database.isConnected());
Database.connect();
console.log(Database.isConnected());

// 16. Create a BankAccount class where:
// Each instance has a balance.
// A method withdraw(amount) reduces the balance if enough funds exist.
// If not enough funds, it throws an error.
// Add a static method transfer(from, to, amount) that moves funds from one account to another.

class BankAccount {
  constructor(balance) {
    this.balance = balance;
  }

  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
    } else {
      throw new Error("Not enough balance!!");
    }
  }

  deposit(amount) {
    this.balance += amount;
  }

  static transfer(from, to, amount) {
    from.withdraw(amount);
    to.deposit(amount);
  }
}

const nicAsia = new BankAccount(10000);
const laxmiSunrise = new BankAccount(5000);
nicAsia.withdraw(2000);
nicAsia.withdraw(2000);
console.log(nicAsia.balance);
BankAccount.transfer(nicAsia, laxmiSunrise, 1000);
BankAccount.transfer(nicAsia, laxmiSunrise, 1000);
console.log(nicAsia.balance);
console.log(laxmiSunrise.balance);

// 17. Create a Logger singleton using a class. Ensure only one instance can be created.
class Logger {
  static instance;

  constructor() {
    if (Logger.instance) {
      throw new Error("Error, instance already created!");
    }
    this.timestamp = Date.now(); // some data just to show
  }
  static getInstance() {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }
}

const a = Logger.getInstance();
const b = Logger.getInstance();

console.log(a);
console.log(b);
console.log(a === b);

// const cat = new Logger(); // violates the singleton pattern
// const kat = new Logger();

// console.log(cat);
// console.log(kat);

// 18. Create a class Timer that can:
// Start and stop the timer.
// Record the duration between calls using Date.now().
// Add a method getDuration() to return the time in milliseconds.

class Timer {
  start() {
    this.startTime = Date.now();
  }

  stop() {
    this.endTime = Date.now();
  }

  getDuration() {
    return this.endTime - this.startTime;
  }
}

const timer1 = new Timer();
timer1.start();
timer1.stop();
console.log(timer1.getDuration());

// 19. Create a class hierarchy: Employee → Manager, Engineer. Use instanceof to determine roles dynamically.

class Employee {}

class Manager extends Employee {}

class Engineer extends Employee {}

const ram = new Manager();
const shyam = new Engineer();

console.log(ram instanceof Employee);
console.log(shyam instanceof Employee);
console.log(ram instanceof Manager);
console.log(shyam instanceof Engineer);
console.log(ram instanceof Engineer);
console.log(shyam instanceof Manager);

//20. Write a function createClass(className) that returns a new class with the given name and a static method info() that returns "This is class <className>".

function creatClass(CustomClass) {
  return class {
    static info() {
      return `This is ${CustomClass}`;
    }
  };
}

const home = creatClass("Home");
console.log(home.info());

//21.Use the mixin pattern to add a logging method to any class dynamically using a function.

function LoggerMixIn(className) {}
