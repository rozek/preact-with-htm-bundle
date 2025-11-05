import { defineConfig } from 'vite'

export default defineConfig({
/*
  resolve: {
    alias: [
      { find: 'preact/hooks', replacement: 'node_modules/preact/hooks/dist/hooks.esm.js' },
      { find: 'preact/compat', replacement: 'node_modules/preact/compat/dist/compat.esm.js' }
    ]
  },
*/
  build: {
    lib: {
      entry: './src/preact-with-htm-bundle.ts',
      fileName: () => `preact-with-htm-bundle.esm.js`,
      formats: ['es']
    },
    minify: false,
    target: 'es2020',
    outDir: './dist',
    emptyOutDir: true,
    rollupOptions: {
      external: [],
      output: {
        globals: {},
        entryFileNames: '[name].esm.js',
        preserveModules: false
      }
    }
  },
  test: {
    environment: 'node',
    includeSource: ['./src/**/*.{ts,js}']
  }
})