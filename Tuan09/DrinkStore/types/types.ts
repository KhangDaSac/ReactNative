export interface Drink {
  id: string;
  name: string;
  price: number;
  image: string;
}

export interface Order {
  id?: number;
  drinkId: string;
  name: string;
  price: number;
  quantity: number;
}
