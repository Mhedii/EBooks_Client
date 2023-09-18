import { defineConfig } from 'rollup';

export default defineConfig({
  // ... other Rollup configuration options ...
  input: 'src/main.js', // Your entry point
  output: {
    dir: 'dist',
    format: 'esm', // Or another format you're targeting
  },
  build: {
    chunkSizeWarningLimit: 600, // Set the limit to 600 kB or your desired value
  },
});
