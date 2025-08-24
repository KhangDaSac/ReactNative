import { Book } from './Book.ts';
import { User } from './User.ts';

class Library {
    private books: Book[];
    private users: User[];

    constructor() {
        this.books = [];
        this.users = [];
    }

    addBook(book: Book): void {
        this.books.push(book);
    }

    getBooks(): Book[] {
        return this.books;
    }

    addUser(user: User): void {
        this.users.push(user);
    }

    getUsers(): User[] {
        return this.users;
    }
}

export { Library };