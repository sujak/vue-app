import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);
  const getCount = computed(() => count.value);

  function increment(_, value = 1) {
    count.value += value;
  }

  function decrement(_, value = 1) {
    count.value -= value;
  }
  return { count, getCount, increment, decrement };
});
