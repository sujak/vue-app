import { defineConfig, toEscapedSelector as e, presetUno, presetIcons } from 'unocss';
import transformerVariantGroup from '@unocss/transformer-variant-group';

const createPresetIcons = () => {
  const isBuild = !!process.argv[4];
  if (import.meta.env.VITE_USE_ONLINE_ICON === 'true') {
    return [];
  } else {
    return [
      presetIcons({
        prefix: ''
        // 모든 아이콘이 기본적으로 로드되어 있기 때문에 시작 속도가 매우 느립니다. 필요한 아이콘만 로드하여 시작 속도를 높일 수 있습니다.
        // collections: {
        //   carbon: () => import('@iconify-json/carbon/icons.json').then(i => i.default),
        //   mdi: () => import('@iconify-json/mdi/icons.json').then(i => i.default),
        //   logos: () => import('@iconify-json/logos/icons.json').then(i => i.default),
        // }
      })
    ];
  }
};

export default defineConfig({
  // ...UnoCSS options
  rules: [
    [
      /^overflow-ellipsis$/,
      ([], { rawSelector }) => {
        const selector = e(rawSelector);
        return `
${selector} {
  text-overflow: ellipsis;
}
`;
      }
    ],
    [
      /^custom-hover$/,
      ([], { rawSelector }) => {
        const selector = e(rawSelector);
        return `
${selector} {
  display: flex;
  height: 100%;
  padding: 1px 10px 0;
  cursor: pointer;
  align-items: center;
  transition: background var(--transition-time-02);
}
/* you can have multiple rules */
${selector}:hover {
  background-color: var(--top-header-hover-color);
}
.dark ${selector}:hover {
  background-color: var(--el-bg-color-overlay);
}
`;
      }
    ],
    [
      /^layout-border__left$/,
      ([], { rawSelector }) => {
        const selector = e(rawSelector);
        return `
${selector}:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 1px;
  height: 100%;
  background-color: var(--el-border-color);
  z-index: 3;
}
`;
      }
    ],
    [
      /^layout-border__right$/,
      ([], { rawSelector }) => {
        const selector = e(rawSelector);
        return `
${selector}:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 1px;
  height: 100%;
  background-color: var(--el-border-color);
  z-index: 3;
}
`;
      }
    ],
    [
      /^layout-border__top$/,
      ([], { rawSelector }) => {
        const selector = e(rawSelector);
        return `
${selector}:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: var(--el-border-color);
  z-index: 3;
}
`;
      }
    ],
    [
      /^layout-border__bottom$/,
      ([], { rawSelector }) => {
        const selector = e(rawSelector);
        return `
${selector}:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: var(--el-border-color);
  z-index: 3;
}
`;
      }
    ]
  ],
  presets: [presetUno({ dark: 'class', attributify: false }), ...createPresetIcons()],
  transformers: [transformerVariantGroup()],
  content: {
    pipeline: {
      include: [/\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html|ts)($|\?)/]
    }
  }
});
