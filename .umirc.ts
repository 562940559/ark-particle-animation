import { defineConfig } from 'umi';

export default defineConfig({
  title: 'Ark',
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  hash: true,
});
