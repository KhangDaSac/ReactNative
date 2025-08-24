import { Animal } from "./Animal.ts";

export class Cat extends Animal {
    makeSound(): void {
        console.log("The cat meows");
    }
}
