import { defineStore } from 'pinia';
import { store } from '../index';
// import { setCssVar, humpToUnderline } from '@/utils';
// import { colorIsDark, hexToRGB, lighten, mix } from '@/utils/color';
// import { ElMessage, ComponentSize } from 'element-plus';
// import { useCssVar } from '@vueuse/core';
// import { unref } from 'vue';
// import { useDark } from '@vueuse/core';

const useAppStore = defineStore('app', {
  state: () => ({
    sizeMap: ['default', 'large', 'small'],
    mobile: false,
    title: import.meta.env.VITE_APP_TITLE,
    pageLoading: false,
    breadcrumb: true,
    breadcrumbIcon: true,
    collapse: false,
    uniqueOpened: false,
    hamburger: true,
    screenfull: true,
    size: true,
    locale: true,
    tagsView: true,
    tagsViewIcon: true,
    logo: true,
    fixedHeader: true,
    footer: true,
    dynamicRouter: true,
    serverDynamicRouter: true,
    fixedMenu: false,
    layout: 'classic',
    isDark: false,
    currentSize: 'default',
    theme: {
      elColorPrimary: '#409eff',
      leftMenuBorderColor: 'inherit',
      leftMenuBgColor: '#001529',
      leftMenuBgLightColor: '#0f2438',
      leftMenuBgActiveColor: 'var(--el-color-primary)',
      leftMenuCollapseBgActiveColor: 'var(--el-color-primary)',
      leftMenuTextColor: '#bfcbd9',
      leftMenuTextActiveColor: '#fff',
      logoTitleTextColor: '#fff',
      logoBorderColor: 'inherit',
      topHeaderBgColor: '#fff',
      topHeaderTextColor: 'inherit',
      topHeaderHoverColor: '#f6f6f6',
      topToolBorderColor: '#eee'
    }
  }),
  getters: {
    // 생략
  },
  actions: {
    // 생략
  },
  persist: true
});

export const useAppStoreWithOut = () => {
  return useAppStore(store);
};