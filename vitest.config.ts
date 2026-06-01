import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    include: [
      '**/*.test.ts',
      'src/leetcode/**/*.ts',
      'src/codewars/**/*.ts',
      'src/neetcode/**/*.ts',
      'src/dojo/**/*.ts',
    ],
    globals: true,
  },
});
