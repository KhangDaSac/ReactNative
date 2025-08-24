import { type Movable } from "./Movable.ts";

export class Robot implements Movable {
    move(): void {
        console.log("The robot is walking forward.");
    }
}
