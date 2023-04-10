import react from "@vitejs/plugin-react";
import {defineConfig} from "vite";
// import {defineConfig} from "vite";

// const root = resolve(__dirname, "src")
// const outDir = resolve(__dirname, "dist")

// https://vitejs.dev/config/
export default defineConfig({
	// root,
	plugins: [react()],
	base: "/portfolioPROD/",
	// build: {
	// 	outDir,
	// 	emptyOutDir: true,
	// 	rollupOptions: {
	// 		input: {
	// 			main: resolve(root, "index.html"),
	// 			about: resolve(root, "about", "index.html")

	// 		},
	// 	},
	// },
});
