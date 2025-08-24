import { type Swimmable } from './Interface.ts'

class Fish implements Swimmable {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    swim(): string {
        return `${this.name} is swimming in the water!`;
    }
}

export { Fish };