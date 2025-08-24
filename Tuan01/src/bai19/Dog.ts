import { Animal } from "./Animal.ts";

export class Dog extends Animal {
    makeSound(): void {
        console.log("The dog barks");
    }
}
