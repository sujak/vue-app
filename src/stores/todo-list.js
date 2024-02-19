import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useTodoListStore = defineStore('todoList', () => {
  // State
  const todoList = ref([]);

  // Actions
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

  const toggleCompleted = (itemId) => {
    const index = todoList.value.findIndex(todo => todo.id === itemId);
    if (index !== -1) {
      todoList.value[index].completed = !todoList.value[index].completed;
    }
  };

  return {
    todoList,
    addTodo,
    deleteTodo,
    toggleCompleted,
  };
});