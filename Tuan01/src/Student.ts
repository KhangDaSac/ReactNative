import { Person } from './Person.ts'

class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }

    public displayAll(): void {
        console.log(`name: ${this.name}`);
        console.log(`age: ${this.age}`);
        console.log(`grade: ${this.grade}`);
    }
}

export { Student };