import { defineStore } from 'pinia';
import { store } from '../index';
import { ElMessageBox } from 'element-plus';
import { loginOutApi } from '@/api/login';
import { useTagsViewStore } from './tagsView';
import router from '@/router';

/**
 * 사용자 스토어 정의
 */
export const useUserStore = defineStore('user', {
  state: () => {
    return {
      userInfo: undefined,
      tokenKey: 'Authorization',
      token: '',
      roleRouters: undefined,
      rememberMe: true,
      loginInfo: undefined
    };
  },
  getters: {
    getTokenKey() {
      return this.tokenKey;
    },
    getToken() {
      return this.token;
    },
    getUserInfo() {
      return this.userInfo;
    },
    getRoleRouters() {
      return this.roleRouters;
    },
    getRememberMe() {
      return this.rememberMe;
    },
    getLoginInfo() {
      return this.loginInfo;
    }
  },
  actions: {
    setTokenKey(tokenKey) {
      this.tokenKey = tokenKey;
    },
    setToken(token) {
      this.token = token;
    },
    setUserInfo(userInfo) {
      this.userInfo = userInfo;
    },
    setRoleRouters(roleRouters) {
      this.roleRouters = roleRouters;
    },
    logoutConfirm() {
      ElMessageBox.confirm('로그아웃 하시겠습니까?', '알림', {
        confirmButtonText: '확인',
        cancelButtonText: '취소',
        type: 'warning'
      })
        .then(async () => {
          const res = await loginOutApi().catch(() => {});
          if (res) {
            this.reset();
          }
        })
        .catch(() => {});
    },
    reset() {
      const tagsViewStore = useTagsViewStore();
      tagsViewStore.delAllViews();
      this.setToken('');
      this.setUserInfo(undefined);
      this.setRoleRouters([]);
      router.replace('/login');
    },
    logout() {
      this.reset();
    },
    setRememberMe(rememberMe) {
      this.rememberMe = rememberMe;
    },
    setLoginInfo(loginInfo) {
      this.loginInfo = loginInfo;
    }
  },
  persist: true
});

/**
 * 사용자 스토어 가져오기 (훅)
 */
export const useUserStoreWithOut = () => {
  return useUserStore(store);
};