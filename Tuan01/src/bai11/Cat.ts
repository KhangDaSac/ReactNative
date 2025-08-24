import { Animal } from './Animal.ts';

class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }

    meow(): string {
        return `${this.name} says: Meow!`;
    }
    
    makeSound(): string {
        return this.meow();
    }
}

export { Cat };