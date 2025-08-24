import { type Vehicle } from "./Vehicle.ts";

export class Car implements Vehicle {
    start(): void {
        console.log("Car started");
    }

    stop(): void {
        console.log("Car stopped");
    }
}
