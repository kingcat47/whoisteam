import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
	publicDir: 'public',
	resolve: {
		alias: {
			'@': '/src',
		},
	},
	plugins: [
		react(),
		svgr(),
		VitePWA({
			registerType: 'autoUpdate',
			devOptions: {
				enabled: true,
			},
			manifest: {
				name: 'Mixir',
				theme_color: '#fff',
				display: 'standalone',
				background_color: '#fff',
				orientation: 'portrait',
				scope: '/',
				icons: [
					{
						src: '/icon-192.png',
						type: 'image/png',
						sizes: '192x192',
					},
					{
						src: '/icon-192-maskable.png',
						type: 'image/png',
						sizes: '192x192',
						purpose: 'maskable',
					},
					{
						src: '/icon-512.png',
						type: 'image/png',
						sizes: '512x512',
					},
					{
						src: '/icon-512-maskable.png',
						type: 'image/png',
						sizes: '512x512',
						purpose: 'maskable',
					},
				],
			},
		}),
	],
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler', // or "modern"
			},
		},
	},
});
