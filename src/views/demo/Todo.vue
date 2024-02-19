<template>
  <div>
    <h1>Todo List</h1>
    <div  v-if="todoList.length" class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="w-3/12 px-6 py-3">ID</th>
            <th scope="col" class="w-5/12 px-6 py-3">Title</th>
            <th scope="col" class="w-1/12 px-6 py-3">Completed</th>
            <th scope="col" class="w-3/12 px-6 py-3">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr  v-for="todo in todoList" :key="todo.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {{ todo.id }}
            </th>
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {{ todo.title }}
            </th>
            <td class="px-6 py-4 text-center">
              <button v-if="todo.completed" class="bg-blue-500 border-blue-500 text-sm text-white py-1 px-2 rounded" @click.stop="toggleCompleted(todo.id)">&#10004;</button>
              <button v-else class="bg-gray-500 border-gray-500 text-sm text-white py-1 px-2 rounded" @click.stop="toggleCompleted(todo.id)">&#10004;</button>
            </td>
            <td class="px-6 py-4 text-center">
              <button @click="handleDeleteTodo(todo.id)" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <form class="w-full" @submit.prevent="handleAddTodo">
      <div class="flex items-center border-b border-blue-500 py-2">
        <input ref="todoInput" type="text" v-model="newTodo" class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" />
        <button type="submit" class="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded">추가</button>
      </div>
    </form>

  </div>
</template>

<script setup>
import { ref } from 'vue';
// import { nextTick } from 'vue';
import { storeToRefs } from 'pinia';
import { useTodoListStore } from '@/stores/todo-list';

const todoListStore = useTodoListStore();
const { todoList } = storeToRefs(todoListStore);
const { addTodo, deleteTodo, toggleCompleted } = todoListStore;

const newTodo = ref('');
const todoInput = ref(null);

const handleAddTodo = () => {
  if (newTodo.value.trim()) {
    addTodo({ title: newTodo.value.trim(), completed: false });
    newTodo.value = '';
    // nextTick().then(() => {
    todoInput.value.focus();
    // })
  } else {
    todoInput.value.focus();
  }
};

const handleDeleteTodo = (itemId) => {
  const item = todoList.value.find((todo)=> todo.id === itemId);
  if(window.confirm(`${item.title} 항목을 삭제하시겠습니까?`)){
    deleteTodo(itemId)
  }
}
</script>
