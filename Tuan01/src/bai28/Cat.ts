import { Animal } from "./Animal.ts";

export class Cat extends Animal {
    protected makeSound(): void {
        console.log("Meow! Meow!");
    }

    public meow(): void {
        this.makeSound();
    }
}
