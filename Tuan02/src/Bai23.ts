interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const fetchCompletedTodos = async (): Promise<Todo[]> => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");

    if (!response.ok) {
      throw new Error(`${response.status}`);
    }

    const todos: Todo[] = await response.json();

    const completedTodos = todos.filter(todo => todo.completed);

    console.log(completedTodos);

    return completedTodos;
  } catch (error) {
    console.error( error);
    return [];
  }
};

fetchCompletedTodos();
