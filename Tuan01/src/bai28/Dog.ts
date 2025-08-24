import { Animal } from "./Animal.ts";

export class Dog extends Animal {
    protected makeSound(): void {
        console.log("Woof! Woof!");
    }

    public bark(): void {
        this.makeSound();
    }
}
