import { Person } from './bai01/Person.ts';
import { Student } from './bai02/Student.ts';
import { Car } from './bai03/Car.ts';
import { Rectangle } from './bai04/Rectangle.ts';
import { BankAccount } from './bai05/BankAccount.ts';
import { Book } from './bai06/Book.ts';
import { User } from './bai07/User.ts';
import { Product } from './bai08/Product.ts';
import { type Animal } from './bai09/Animal.ts';
// import { Cat } from './bai09/Cat.ts';
// import { Dog } from './bai09/Dog.ts';
import { Account } from './bai10/Account.ts';

import { Dog } from './bai11/Dog.ts';
import { Cat } from './bai11/Cat.ts';

import { Bird } from './bai12/Bird.ts';
import { Fish } from './bai12/Fish.ts';

import { Square } from './bai13/Square.ts';
import { Circle } from './bai13/Circle.ts';

import { Manager } from './bai14/Manager.ts';
import { Developer } from './bai14/Developer.ts';


// Bai01
// const person = new Person("Nguyen Van A", 30);
// person.display();

// Bai02
// const student = new Student("Nguyen Van B", 15, "A");
// student.displayAll();

// Bai03
// const car = new Car("Honda", "New", 2025);
// car.display();

// Bai04
// const rectangle = new Rectangle(10, 20);
// console.log(`Rectangle Area: ${rectangle.area()}`);
// console.log(`Rectangle Perimeter: ${rectangle.perimeter()}`);

// Bai05
// const bankAccount = new BankAccount(500);
// bankAccount.deposit(100);
// console.log(`BankAccount Balance after deposit: ${bankAccount.balance}`);
// bankAccount.withdraw(200);
// console.log(`BankAccount Balance after withdrawal: ${bankAccount.balance}`);

// Bai06
// const book = new Book("Nha gia kim", "ABC", 1900);
// console.log(book);

// Bai07
// const user = new User("Nguyen Van A");
// console.log(user.getName());
// user.setName("Tran Thi B");
// console.log(user.getName());

//Bai08
const products: Product[] = [
    new Product("Laptop", 1200),
    new Product("Mouse", 25),
    new Product("Keyboard", 80),
    new Product("Monitor", 250),
    new Product("Headphones", 150)
];

//Bai08
// console.log("Sản phẩm có giá > 100:");
// const expensiveProducts = products.filter(product => product.price > 100);
// expensiveProducts.forEach(product => {
//     console.log(`Tên: ${product.name}, Giá: ${product.price}`);
// });

//Bai09
// const animals: Animal[] = [
//     new Dog("Buddy"),
//     new Cat("Whiskers")
// ];

// console.log("Âm thanh của các động vật:");
// animals.forEach(animal => {
//     console.log(`${animal.name} kêu: ${animal.sound()}`);
// });

//Bai10
// const account = new Account("user123", "secret123", "ACC001");
// console.log(account)

//Bai11
// const dog = new Dog("Buddy");
// const cat = new Cat("Whiskers");

// console.log(dog.bark());
// console.log(cat.meow());

//Bai12
// Tạo các đối tượng Bird và Fish
// const bird = new Bird("Sparrow");
// const fish = new Fish("Goldfish");

// console.log(bird.fly());
// console.log(fish.swim());

//Bai13
// const square = new Square(5);
// const circle = new Circle(3);

// console.log(`Diện tích hình vuông: ${square.area()}`);
// console.log(`Diện tích hình tròn: ${circle.area()}`);

//Bai14
const manager = new Manager("Alice", 80000, "HR");
const developer = new Developer("Bob", 60000, "TypeScript");

console.log(manager.getDetails());
console.log(manager.manageTeam());
console.log(developer.getDetails());
console.log(developer.writeCode());