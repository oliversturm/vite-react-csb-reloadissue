import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:
    process.env.HOSTING_ENV === 'csb'
      ? {
          hmr: {
            port: 443,
          },
        }
      : {},
});
