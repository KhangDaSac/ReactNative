class BankAccount {
    balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }

    public deposit(money: number): void {
        this.balance += money; // Fixed: Correctly update balance
    }

    public withdraw(money: number): void {
        this.balance -= money; // Fixed: Correctly update balance
    }
}

export { BankAccount };