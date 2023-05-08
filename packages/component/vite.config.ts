import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			formats: ['es'],
		},
		rollupOptions: {
			output: {
				format: 'es',
				entryFileNames: 'index.js',
				dir: 'dist/',
			},
		},
	},
	plugins: [react(), dts()],
});
