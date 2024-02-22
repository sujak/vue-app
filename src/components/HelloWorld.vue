<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="increment">count is {{ getCount }}</button>
    <p>
      <span class="w-16">Edit</span>
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useCounterStore } from '@/stores/counter';

const counterStore = useCounterStore();
const { getCount } = storeToRefs(counterStore);
const { increment } = counterStore;

defineProps({
  msg: String
});
// onMounted(() => {});
</script>

<style lang="scss" scoped></style>
