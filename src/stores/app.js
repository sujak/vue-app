import { ref, reactive, computed } from 'vue';
import { defineStore } from 'pinia';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, signOut } from 'firebase/auth';
import { auth } from '@/firebase.config.js';

export const useAppStore = defineStore('app', () => {
  // State
  const showMenu = ref(false);
  const user = reactive({
    loggedIn: false,
    data: null,
    origin: null
  });

  // Getter
  const getNavbar = computed(() => showMenu.value);
  const getUser = computed(() => user);

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

  async function register({ email, password, name }) {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    if (response) {
      user.data = {
        displayName: response.user.displayName,
        email: response.user.email
      };
      user.origin = response.user;

      await updateProfile(auth.currentUser, {
        displayName: name
      });
    } else {
      throw new Error('Unable to register user');
    }
  }
  async function logIn({ email, password }) {
    const response = await signInWithEmailAndPassword(auth, email, password);
    if (response) {
      user.data = {
        displayName: response.user.displayName,
        email: response.user.email
      };
      user.origin = response.user;
    } else {
      throw new Error('login failed');
    }
  }
  async function logOut() {
    await signOut(auth);
    user.data = null;
    user.origin = null;
  }
  async function fetchUser() {
    return new Promise((resolve, reject) => {
      try {
        auth.onAuthStateChanged((info) => {
          user.loggedIn = info !== null;
          if (info) {
            user.data = {
              displayName: info.displayName,
              email: info.email,
            };
            user.origin = info;
          } else {
            user.data = null;
            user.origin = null;
          }
          resolve();
        });
      } catch (err) {
        reject(err);
      }
    });
  }

  return {
    showMenu,
    user,
    getNavbar,
    getUser,
    showNavbar,
    hideNavbar,
    toggleNavbar,
    register,
    logIn,
    logOut,
    fetchUser
  };
});

// https://reqres.in/api/users?/page=1
