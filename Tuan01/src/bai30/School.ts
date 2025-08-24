import { Student } from "./Student.ts";
import { Teacher } from "./Teacher.ts";

export class School {
    private students: Student[] = [];
    private teachers: Teacher[] = [];

    addStudent(student: Student): void {
        this.students.push(student);
    }

    addTeacher(teacher: Teacher): void {
        this.teachers.push(teacher);
    }

    displayInfo(): void {
        console.log("===== School Information =====");
        console.log("Students:");
        this.students.forEach(student => student.displayInfo());

        console.log("Teachers:");
        this.teachers.forEach(teacher => teacher.displayInfo());
    }
}
