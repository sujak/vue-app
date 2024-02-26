<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 text-left">
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">로그인</h1>
          <form @submit.prevent="handleSubmit" class="space-y-4 md:space-y-6">
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">이메일</label>
              <input
                type="email"
                v-model="form.email"
                name="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">비밀번호</label>
              <input
                type="password"
                v-model="form.password"
                name="password"
                id="password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div class="flex items-center justify-between">
              <!-- <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    type="checkbox"
                    v-model="form.rememberMe"
                    id="remember"
                    aria-describedby="remember"
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label for="remember" class="text-gray-500 dark:text-gray-300">로그인 유지</label>
                </div>
              </div> -->
              <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 ml-auto">비밀번호를 잊으셨나요?</a>
            </div>
            <button type="submit" class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg">로그인</button>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              계정이 아직 없으신가요?
              <router-link to="/signup" class="font-medium text-blue-600 hover:underline dark:text-blue-500"> 회원가입 </router-link>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useAppStore } from '@/stores/app';

const error = ref(null);
const form = reactive({
  email: '',
  password: '',
  rememberMe: false
});
const router = useRouter();
const appStore = useAppStore();
const { logIn } = appStore;

const handleSubmit = async () => {
  try {
    await logIn({ ...form });
    const { returnUrl } = router.currentRoute.value.query;
    router.push(`${returnUrl ? returnUrl : '/'}`);
  } catch (err) {
    console.log('로그인 실패', err.message);
    error.value = err.message;
  }
};
</script>
