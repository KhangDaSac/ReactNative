import { Animal } from './Animal.ts';

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }

    bark(): string {
        return `${this.name} says: Woof!`;
    }

    makeSound(): string {
        return this.bark();
    }
}

export { Dog };