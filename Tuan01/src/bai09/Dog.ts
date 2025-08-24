import { type Animal } from './Animal.ts';
class Dog implements Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    sound(): string {
        return "Woof!";
    }
}

export { Dog }