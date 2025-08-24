import { Employee } from './Employee.ts';

class Manager extends Employee {
    department: string;

    constructor(name: string, salary: number, department: string) {
        super(name, salary);
        this.department = department;
    }

    manageTeam(): string {
        return `${this.name} is managing the ${this.department} department`;
    }
}

export { Manager };