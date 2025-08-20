function hello(name: string): string {
  return `Hello, ${name}!`;
}

console.log(hello("200Lab"));

//Bai01
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public display(){
        console.log(`name: ${this.name}`)
        console.log(`age: ${this.age}`)
    }
}


const person = new Person("Nguyen Van A", 30)
person.display()

//Bai02
class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }


    public displayAll(){
        console.log(`name: ${this.name}`)
        console.log(`age: ${this.age}`)
        console.log(`grade: ${this.grade}`)
    }
}

const student = new Student("Nguyen Van B", 15, "A")
student.displayAll()

