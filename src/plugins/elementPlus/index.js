import { ElLoading, ElScrollbar } from 'element-plus';

const plugins = [ElLoading];

const components = [ElScrollbar];

export const setupElementPlus = (app) => {
  plugins.forEach((plugin) => {
    app.use(plugin);
  });

  // 개발 환경의 빠른 작동을 위해 모든 양식을 한 번에 도입
  // if (import.meta.env.VITE_USE_ALL_ELEMENT_PLUS_STYLE === 'true') {
    import('element-plus/dist/index.css');
    // return;
  // }

  components.forEach((component) => {
    app.component(component.name, component);
  });
};
