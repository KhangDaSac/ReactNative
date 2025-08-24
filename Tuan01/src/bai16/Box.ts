class Box<T> {
    private content: T;

    constructor(value: T) {
        this.content = value;
    }

    getContent(): T {
        return this.content;
    }

    setContent(value: T): void {
        this.content = value;
    }
}

export { Box };