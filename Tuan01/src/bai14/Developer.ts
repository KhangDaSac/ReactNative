import { Employee } from './Employee.ts';

class Developer extends Employee {
    programmingLanguage: string;

    constructor(name: string, salary: number, programmingLanguage: string) {
        super(name, salary);
        this.programmingLanguage = programmingLanguage;
    }

    writeCode(): string {
        return `${this.name} is writing code in ${this.programmingLanguage}`;
    }
}

export { Developer };