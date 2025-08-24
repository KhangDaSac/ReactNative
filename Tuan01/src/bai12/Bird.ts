import { type Flyable } from './Interface.ts';

class Bird implements Flyable {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    fly(): string {
        return `${this.name} is flying in the sky!`;
    }
}

export { Bird };