import { defineStore } from 'pinia';
import { asyncRouterMap, constantRouterMap } from '@/router';
import {
  generateRoutesByFrontEnd,
  generateRoutesByServer,
  flatMultiLevelRoutes
} from '@/utils/routerHelper';
import { store } from '../index';
import { cloneDeep } from 'lodash-es';

/**
 * 권한 상태 인터페이스
 */
export const usePermissionStore = defineStore('permission', {
  state: () => ({
    routers: [],
    addRouters: [],
    isAddRouters: false,
    menuTabRouters: []
  }),
  getters: {
    getRouters() {
      return this.routers;
    },
    getAddRouters() {
      return flatMultiLevelRoutes(cloneDeep(this.addRouters));
    },
    getIsAddRouters() {
      return this.isAddRouters;
    },
    getMenuTabRouters() {
      return this.menuTabRouters;
    }
  },
  actions: {
    generateRoutes(type, routers) {
      return new Promise((resolve) => {
        let routerMap = [];
        if (type === 'server') {
          // 서버에서 메뉴 필터링
          routerMap = generateRoutesByServer(routers);
        } else if (type === 'frontEnd') {
          // 프론트엔드에서 메뉴 필터링
          routerMap = generateRoutesByFrontEnd(cloneDeep(asyncRouterMap), routers);
        } else {
          // 정적 라우터 테이블 직접 읽기
          routerMap = cloneDeep(asyncRouterMap);
        }
        // 동적 라우터, 404 페이지는 항상 맨 뒤에 있어야 함
        this.addRouters = routerMap.concat([
          {
            path: '/:path(.*)*',
            redirect: '/404',
            name: '404Page',
            meta: {
              hidden: true,
              breadcrumb: false
            }
          }
        ]);
        // 모든 라우터 렌더링
        this.routers = cloneDeep(constantRouterMap).concat(routerMap);
        resolve();
      });
    },
    setIsAddRouters(state) {
      this.isAddRouters = state;
    },
    setMenuTabRouters(routers) {
      this.menuTabRouters = routers;
    }
  },
  persist: {
    paths: ['routers', 'addRouters', 'menuTabRouters']
  }
});

/**
 * 권한 스토어 가져오기 (훅)
 */
export const usePermissionStoreWithOut = () => {
  return usePermissionStore(store);
};