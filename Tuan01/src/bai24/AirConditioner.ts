import { Appliance } from "./Appliance.ts";

export class AirConditioner extends Appliance {
    turnOn(): void {
        console.log("The air conditioner is now ON.");
    }
}
