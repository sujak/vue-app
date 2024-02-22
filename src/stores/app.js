import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', () => {
  // State
  const showMenu = ref(false);

  // Getter
  const getNavbar = computed(() => showMenu.value);

  // Actions
  const showNavbar = () => {
    showMenu.value = true;
  };
  const hideNavbar = () => {
    showMenu.value = false;
  };
  const toggleNavbar = () => {
    showMenu.value = !showMenu.value;
  };

  return { showMenu, getNavbar, showNavbar, hideNavbar, toggleNavbar };
});
