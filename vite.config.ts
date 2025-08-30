// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   optimizeDeps: {
//     exclude: ['lucide-react'],
//   },
// });





import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/IoT_Hardware_Project/',  // 👈 Add this line
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
