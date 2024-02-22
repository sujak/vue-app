<template>
  <div class="p-8">
    <div class="flex flex-col w-full mx-auto p-4 bg-white rounded-lg shadow-md">
      <h1 class="text-2xl font-bold text-center">Todo List</h1>
      <form class="flex mt-4" @submit.prevent="handleAddTodo">
        <input ref="todoInput" type="text" class="flex-1 p-2 border border-gray-200 rounded-l-md focus:outline-none" placeholder="새로운 할 일 입력..." v-model="newTodo" />
        <button type="submit" class="ml-2 px-4 py-2 text-white bg-sky-500 rounded-r-md hover:bg-sky-700">추가</button>
      </form>
      <ul v-if="todoList.length" class="flex flex-col mt-4">
        <li v-for="todo in todoList" :key="todo.id" class="flex items-center justify-between p-2 border-b border-gray-200">
          <input type="checkbox" class="mr-2 accent-sky-500" v-model="todo.completed" />
          <span class="grow text-gray-700 break-words text-left min-w-0">{{ todo.title }}</span>
          <button class="ml-2 text-red-500 hover:text-red-700 flex-shrink-0" @click="handleDeleteTodo(todo.id)">삭제</button>
        </li>
      </ul>
    </div>


  </div>
</template>

<script setup>
import { ref } from 'vue';
// import { nextTick } from 'vue';
import { storeToRefs } from 'pinia';
import { useTodoListStore } from '@/stores/todo-list';

const todoListStore = useTodoListStore();
const { todoList } = storeToRefs(todoListStore);
const { addTodo, deleteTodo } = todoListStore;

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
