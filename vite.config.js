import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import process from 'process';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
 define: {
  'process.env.VITE_API_URL': JSON.stringify(process.env.VITE_API_URL)
 },
  server: {
    host: '0.0.0.0', // Allow connections from any host
  },
});
