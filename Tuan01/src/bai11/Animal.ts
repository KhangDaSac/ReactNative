class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound(): string {
        return "Some generic animal sound";
    }
}

export { Animal };