import type { ConfigEnv } from 'vitest/config';
import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';
export default (configEnv: ConfigEnv) => {
    return mergeConfig(
        viteConfig(configEnv),
        defineConfig({
            test: {
                name: 'my-libary',
                dir: './tests',
                logHeapUsage: true,
                coverage: {
                    reporter: ['html'],
                },
            },
        })
    );
};
