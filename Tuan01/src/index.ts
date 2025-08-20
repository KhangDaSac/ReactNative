function hello(name: string): string {
    return `Hello, ${name}!`;
}

// console.log(hello("200Lab"));

//Bai01
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public display(): void {
        console.log(`name: ${this.name}`)
        console.log(`age: ${this.age}`)
    }
}


const person = new Person("Nguyen Van A", 30)
// person.display()

//Bai02
class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }


    public displayAll(): void {
        console.log(`name: ${this.name}`)
        console.log(`age: ${this.age}`)
        console.log(`grade: ${this.grade}`)
    }
}

const student = new Student("Nguyen Van B", 15, "A")
// student.displayAll()

//Bai03
class Car {
    brand: string;
    model: string;
    year: number;

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    public display() {
        console.log(`brand: ${this.brand}`)
        console.log(`model: ${this.model}`)
        console.log(`year: ${this.year}`)
    }
}

const car = new Car("Honda", "New", 2025);
// car.display()

//Bai04
class Rectangle {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    public area(): number {
        return this.width * this.height;
    }

    public perimeter(): number {
        return (this.width + this.height) * 2
    }
}

const rectangle = new Rectangle(10, 20);
// console.log(rectangle.area())
// console.log(rectangle.perimeter())

//Bai05
class BankAccount {
    balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }

    public deposit(money: number): void {
        this.balance + money;
    }

    public withdraw(money: number): void {
        this.balance - money;
    }
}
const bankAccount = new BankAccount(500);
// bankAccount.deposit(100);
// console.log(bankAccount.balance)

// bankAccount.withdraw(200);
// console.log(bankAccount.balance)

//Bai06
class Book {
    title: string;
    author: string;
    year: number;

    constructor(title: string, author: string, year: number) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
}

const book = new Book("Nha gia kim", "ABC", 1900)
// console.log(book)

//Bai07
class User {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }
}

const user = new User("Nguyen Van A")
console.log(user.getName())
user.setName("Tran Thi B")
console.log(user.getName())

