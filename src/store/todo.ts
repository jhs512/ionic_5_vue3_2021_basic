import { defineStore } from "pinia";

export interface Todo {
  id: number;
  title: string;
}

export const useTodoStore = defineStore({
  // name of the store
  // it is used in devtools and allows restoring state
  id: "todo",
  // a function that returns a fresh state
  state: () => ({
    lastId: 0,
    todos: [] as Todo[],
  }),
  // optional getters
  getters: {},
  // optional actions
  actions: {
    addTodo(newTodoTitle: string) {
      const newTodo = {} as Todo;
      newTodo.id = ++this.lastId;
      newTodo.title = newTodoTitle;
      this.todos.push(newTodo);
    },
  },
});
