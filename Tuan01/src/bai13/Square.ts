import { Shape } from './Shape.ts';

class Square extends Shape {
    side: number;

    constructor(side: number) {
        super();
        this.side = side;
    }

    area(): number {
        return this.side * this.side;
    }
}

export { Square };