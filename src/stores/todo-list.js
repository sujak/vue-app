import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useTodoListStore = defineStore('todoList', () => {
  // State(ref, reactive)
  const todoList = ref([]);

  // Getter(computed)

  // Actions(function)
  const addTodo = (item) => {
    todoList.value.push({
      id: crypto.randomUUID(),
      completed: false,
      ...item
    });
  };

  const deleteTodo = (itemId) => {
    todoList.value = todoList.value.filter(todo => todo.id !== itemId);
  };

  return {
    todoList,
    addTodo,
    deleteTodo
  };
});

// import { defineStore } from 'pinia';

// export const useTodoListStore = defineStore('todoList', {
//   // State
//   state: () => ({
//     todoList: []
//   }),

//   // getter
//   // actions
//   actions: {
//     addTodo(item) {
//       this.todoList.push({
//         id: crypto.randomUUID(),
//         completed: false,
//         ...item
//       });
//     },
//     deleteTodo(itemId) {
//       this.todoList = this.todoList.filter((todo) => todo.id !== itemId);
//     },
//   }
// });
