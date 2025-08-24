import { type Vehicle } from "./Vehicle.ts";

export class Bike implements Vehicle {
    start(): void {
        console.log("Bike started");
    }

    stop(): void {
        console.log("Bike stopped");
    }
}
