import Person from "./Person.ts";

export default class Teacher extends Person {
    private subject: string;

    constructor(name: string, age: number, subject: string) {
        super(name, age);
        this.subject = subject;
    }

    public introduce(): string {
        return `${super.introduce()} I teach ${this.subject}.`;
    }
}
