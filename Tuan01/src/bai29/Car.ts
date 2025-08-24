import { type Movable } from "./Movable.ts";

export class Car implements Movable {
    move(): void {
        console.log("The car is moving on the road.");
    }
}
