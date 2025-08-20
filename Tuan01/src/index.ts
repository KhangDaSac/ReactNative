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


const p = new Person("Nguyen Van A", 30)
p.display()
