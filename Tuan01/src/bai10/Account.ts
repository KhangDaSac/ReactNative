class Account {
    public username: string;
    private password: string;
    readonly accountId: string;

    constructor(username: string, password: string, accountId: string) {
        this.username = username;
        this.password = password;
        this.accountId = accountId;
    }

    public getPassword(): string {
        return this.password;
    }

    public setPassword(newPassword: string): void {
        this.password = newPassword;
    }
}

export { Account };