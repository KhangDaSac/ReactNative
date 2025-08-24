import { Person } from './bai01/Person.ts';
import { Student } from './bai02/Student.ts';
import { Car } from './bai03/Car.ts';
import { Rectangle } from './bai04/Rectangle.ts';
import { BankAccount } from './bai05/BankAccount.ts';
import { Book } from './bai06/Book.ts';
import { User } from './bai07/User.ts';
import { Product } from './bai08/Product.ts';
import { type Animal } from './bai09/Animal.ts';
import { Cat } from './bai09/Cat.ts';
import { Dog } from './bai09/Dog.ts';


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
const animals: Animal[] = [
    new Dog("Buddy"),
    new Cat("Whiskers")
];

console.log("Âm thanh của các động vật:");
animals.forEach(animal => {
    console.log(`${animal.name} kêu: ${animal.sound()}`);
});