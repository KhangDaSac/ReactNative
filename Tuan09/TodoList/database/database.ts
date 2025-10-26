import * as SQLite from "expo-sqlite";

export interface Task {
  id?: number;
  name: string;
  createdAt?: string;
}

const db = SQLite.openDatabaseSync("tasks.db");

export const initDB = async () => {
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      createdAt TEXT DEFAULT CURRENT_TIMESTAMP
    );
  `);
};

export const getTasks = async (): Promise<Task[]> => {
  const rows = await db.getAllAsync<Task>("SELECT * FROM tasks ORDER BY id DESC");
  return rows;
};

export const addTask = async (name: string) => {
  await db.runAsync("INSERT INTO tasks (name) VALUES (?);", [name]);
};

export const deleteTask = async (id: number) => {
  await db.runAsync("DELETE FROM tasks WHERE id = ?;", [id]);
};
