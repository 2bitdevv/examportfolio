import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/Exam-Portfolio/", 
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
