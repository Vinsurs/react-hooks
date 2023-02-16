import { defineConfig } from "vite"
import typescript from "@rollup/plugin-typescript"
import { resolve } from "path"

export default defineConfig({
    build: {
        target: "es2015",
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'reactHooks',
            fileName: 'react-hooks',
        },
        rollupOptions: {
            external: ['react'],
            output: {
                globals: {
                    react: 'React',
                },
                dir: resolve(__dirname, "dist")
            },
            plugins: [typescript()],
        },
    }
})