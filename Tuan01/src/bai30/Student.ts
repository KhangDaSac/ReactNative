export class Student {
    id: number;
    name: string;
    grade: string;

    constructor(id: number, name: string, grade: string) {
        this.id = id;
        this.name = name;
        this.grade = grade;
    }

    displayInfo(): void {
        console.log(`Student - ID: ${this.id}, Name: ${this.name}, Grade: ${this.grade}`);
    }
}
