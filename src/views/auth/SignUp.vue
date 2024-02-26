<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 text-left">
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">가입</h1>
          <form @submit.prevent="handleSubmit" class="space-y-4 md:space-y-6">
            <div>
              <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">이름</label>
              <input
                type="text"
                v-model="form.name"
                name="name"
                id="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
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
            <div>
              <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">비밀번호 확인</label>
              <input
                type="password"
                v-model="form.confirmPassword"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    type="checkbox"
                    v-model="form.agree"
                    id="agree"
                    aria-describedby="agree"
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label for="agree" class="text-gray-500 dark:text-gray-300">약관 동의하기</label>
                </div>
              </div>
              <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 ml-auto">약관 상세보기</a>
            </div>
            <button type="submit" class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg">가입하기</button>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">이미 계정이 있으신가요?
              <router-link to="/login" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
                로그인
              </router-link>
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
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  agree: false,
});
const router = useRouter();
const appStore = useAppStore();
const { register } = appStore;

const handleSubmit = async () => {
  try {
    const result = await register({ ...form });
    console.log('result: ', result)
    router.push('/');
  } catch (err) {
    const message = (err)=> {
      switch (err.code) {
        case "auth/user-not-found" || "auth/wrong-password":
          return "이메일 혹은 비밀번호가 일치하지 않습니다.";
        case "auth/email-already-in-use":
          return "이미 사용 중인 이메일입니다.";
        case "auth/weak-password":
          return "비밀번호는 6글자 이상이어야 합니다.";
        case "auth/network-request-failed":
          return "네트워크 연결에 실패 하였습니다.";
        case "auth/invalid-email":
          return "잘못된 이메일 형식입니다.";
        case "auth/internal-error":
          return "잘못된 요청입니다.";
        default:
          return "로그인에 실패 하였습니다.";
      }
    }

    console.log('가입 실패 code: ', err.code );
    console.log('가입 실패 msg: ', err.message );
    console.log('-------');
    console.log('가입 실패', err );
    error.value = err.message;
  }
};
</script>