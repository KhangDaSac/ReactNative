export default class Person {
    protected name: string;
    protected age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public introduce(): string {
        return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
    }
}
