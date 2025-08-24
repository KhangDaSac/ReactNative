export class Teacher {
    id: number;
    name: string;
    subject: string;

    constructor(id: number, name: string, subject: string) {
        this.id = id;
        this.name = name;
        this.subject = subject;
    }

    displayInfo(): void {
        console.log(`Teacher - ID: ${this.id}, Name: ${this.name}, Subject: ${this.subject}`);
    }
}
