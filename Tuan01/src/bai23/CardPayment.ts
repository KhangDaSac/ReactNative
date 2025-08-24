import { type Payment } from "./Payment.ts";

export class CardPayment implements Payment {
    pay(amount: number): void {
        console.log(`Paid ${amount} using card.`);
    }
}
