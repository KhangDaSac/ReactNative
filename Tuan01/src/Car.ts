class Car {
    brand: string;
    model: string;
    year: number;

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    public display(): void {
        console.log(`brand: ${this.brand}`);
        console.log(`model: ${this.model}`);
        console.log(`year: ${this.year}`);
    }
}

export { Car };