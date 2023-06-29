import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  server: {
    proxy: {
      "/createuser": {
        target: "http://localhost:8000"
      },
      "/newcomp": {
        target: "http://localhost:8000"
      },
      "/userlogin": {
        target: "http://localhost:8000"
      },
      "/getuser": {
        target: "http://localhost:8000"
      },
      "/getcmp": {
        target: "http://localhost:8000"
      },
      "/gethotels": {
        target: "http://localhost:8000"
      }
    },


  },
  plugins: [react()]
});
