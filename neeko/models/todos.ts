import { model } from '@alipay/xmas-neeko';

interface ITodo {
  name: string;
}

export default model({
  state: {
    todos: [] as ITodo[],
  },
  computed: {
    length(): number {
      return this.todos.length;
    },
  },
  effects: {
    async addTodo(name: string) {
      await fetch(`/api/todos/add?text=${name}`);
    },
    async fetchTodos() {
      const res = await fetch(`/api/todos`);
      const todos = await res.json();
      this.update({
        todos,
      });
    },
  },
  hooks: {
    init() {
      this.fetchTodos();
    },
  }
});
