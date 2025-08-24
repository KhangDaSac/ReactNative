import { type Animal } from './Animal.ts';
class Cat implements Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    sound(): string {
        return "Meow!";
    }
}

export { Cat }