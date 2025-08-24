import { type Payment } from "./Payment.ts";

export class CashPayment implements Payment {
    pay(amount: number): void {
        console.log(`Paid ${amount} in cash.`);
    }
}
