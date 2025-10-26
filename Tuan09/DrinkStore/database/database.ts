import * as SQLite from "expo-sqlite";
import { Order } from "../types/types";

const db = SQLite.openDatabaseSync("orders.db");

export const initDB = (): void => {
  db.execAsync(`
    CREATE TABLE IF NOT EXISTS orders (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      drinkId TEXT NOT NULL,
      name TEXT NOT NULL,
      price REAL NOT NULL,
      quantity INTEGER NOT NULL
    );
  `).catch((err) => console.error("DB init error:", err));
};


export const addOrder = async (order: Order): Promise<void> => {
  try {
    await db.runAsync(
      "INSERT INTO orders (drinkId, name, price, quantity) VALUES (?, ?, ?, ?)",
      [order.drinkId, order.name, order.price, order.quantity]
    );
  } catch (err) {
    console.error("Add order error:", err);
  }
};

export const getOrders = async (): Promise<Order[]> => {
  try {
    const result = await db.getAllAsync<Order>("SELECT * FROM orders");
    return result;
  } catch (err) {
    console.error("Get orders error:", err);
    return [];
  }
};

export const clearOrders = async (): Promise<void> => {
  try {
    await db.execAsync("DELETE FROM orders");
  } catch (err) {
    console.error("Clear orders error:", err);
  }
};

export default db;