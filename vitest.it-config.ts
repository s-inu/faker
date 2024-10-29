import { defineConfig } from 'vitest/config';
import config from './vitest.config';

delete config.test?.coverage;
delete config.test?.typecheck;

export default defineConfig({
  test: {
    ...config.test,
    include: ['test/**/*.it-spec.ts'],
    testTimeout: 30000,
  },
});
