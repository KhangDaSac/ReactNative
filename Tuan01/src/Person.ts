class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public display(): void {
        console.log(`name: ${this.name}`);
        console.log(`age: ${this.age}`);
    }
}

export { Person };