<template>
  <div class="layout layout-default">
    <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-indigo-500 mb-3">
      <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div class="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
          <router-link to="/" class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"> Vue App </router-link>
          <button class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" @click="toggleNavbar">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div :class="{ hidden: !showMenu, flex: showMenu }" class="lg:flex lg:flex-grow items-center">
          <ul class="flex flex-col lg:flex-row list-none ml-auto">
            <li class="nav-item">
              <router-link to="/" class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                <span>Home</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                <span>About</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/demo" class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                <span>Demo</span>
              </router-link>
            </li>
            <template v-if="user.loggedIn">
              <li class="nav-item">
                <router-link to="/profile" class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                  <span>Profile (Error)</span>
                </router-link>
              </li>
              <li class="nav-item">
                <span class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                  <span @click.prevent="signOut" class="btn btn-primary">로그아웃</span>
                </span>
              </li>
            </template>
            <template v-else>
              <li class="nav-item">
                <router-link to="/login" class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                  <span>LOGIN</span>
                </router-link>
              </li>
            </template>
          </ul>
        </div>
      </div>
    </nav>
    <slot />
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useAppStore } from '@/stores/app';
const appStore = useAppStore();
const { showMenu, user } = storeToRefs(appStore);
const { toggleNavbar, logOut } = appStore;

const signOut = async () => {
  logOut();
  // router.push('/')
};
</script>
