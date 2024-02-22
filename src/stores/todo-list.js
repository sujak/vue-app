import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useTodoListStore = defineStore('todoList', () => {
  // State
  const todoList = ref([]);

  // Getter
  // Actions
  const addTodo = (item) => {
    todoList.value.push({
      id: crypto.randomUUID(),
      completed: false,
      ...item
    });
  };

  const deleteTodo = (itemId) => {
    todoList.value = todoList.value.filter((todo) => todo.id !== itemId);
  };

  return {
    todoList,
    addTodo,
    deleteTodo
  };
});
