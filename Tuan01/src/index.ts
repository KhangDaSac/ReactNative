import { Person } from './Person.ts';
import { Student } from './Student.ts';
import { Car } from './Car.ts';
import { Rectangle } from './Rectangle.ts';
import { BankAccount } from './BankAccount.ts';
import { Book } from './Book.ts';
import { User } from './User.ts';
import { Product } from './Product.ts';


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

// Lọc sản phẩm có giá > 100
console.log("Sản phẩm có giá > 100:");
const expensiveProducts = products.filter(product => product.price > 100);
expensiveProducts.forEach(product => {
    console.log(`Tên: ${product.name}, Giá: ${product.price}`);
});