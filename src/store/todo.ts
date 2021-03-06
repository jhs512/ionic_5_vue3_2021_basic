import { getNowDateStr } from "@/util";
import { defineStore } from "pinia";

export interface Todo {
  id: number;
  title: string;
  regDate: string;
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
  getters: {
    latestTodos(): Todo[] {
      return [...this.todos].reverse();
    },
  },
  // optional actions
  actions: {
    addTodo(newTodoTitle: string) {
      const newTodo = {} as Todo;
      newTodo.id = ++this.lastId;
      newTodo.regDate = getNowDateStr();
      newTodo.title = newTodoTitle;
      this.todos.push(newTodo);
    },
    deleteTodo(todo: Todo) {
      const deleteTodoIndex = this.todos.findIndex(
        (todoInLoop: Todo) => todoInLoop.id == todo.id
      );
      this.todos.splice(deleteTodoIndex, 1);
    },
  },
});
