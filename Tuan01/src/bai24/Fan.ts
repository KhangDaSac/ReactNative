import { Appliance } from "./Appliance.ts";

export class Fan extends Appliance {
    turnOn(): void {
        console.log("The fan is now ON.");
    }
}
