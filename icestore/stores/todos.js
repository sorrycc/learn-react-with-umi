
export default {
  todos: [
  ],
  async fetchTodos() {
    const todos = await fetch(`/api/todos`)
      .then(x => x.json());
    this.todos = todos;
  },
  async addTodo(todo) {
    await fetch(`/api/todos/add?text=${todo}`);
  },
};
