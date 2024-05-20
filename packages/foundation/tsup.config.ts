import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
  entryPoints: ['src/index.ts', 'src/tailwind.presets.js'],
  format: ['cjs', 'esm'],
  //   dts: true,
  sourcemap: true,
  clean: true,
  ...options,
}));
