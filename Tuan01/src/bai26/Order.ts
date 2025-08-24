import { Product } from "./Product.ts";

export class Order {
    private products: Product[] = [];

    addProduct(product: Product): void {
        this.products.push(product);
    }

    calculateTotalPrice(): number {
        return this.products.reduce((total, product) => total + product.price, 0);
    }
}
