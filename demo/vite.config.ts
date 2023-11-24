/* eslint-disable no-console */
import { resolve } from 'node:path';
import Vue from '@vitejs/plugin-vue';
import { loadEnv, type ConfigEnv, type UserConfig } from 'vite';
const resolvePath = (str: string) => resolve(process.cwd(), str);
// https://vitejs.dev/config/
export default (configEnv: ConfigEnv) => {
    const env = loadEnv(configEnv.mode, resolvePath('demo'));
    console.info(configEnv);
    console.table(env);
    return {
        base: env.VITE_BASE_URL,
        server: {
            host: '0.0.0.0',
            open: true,
        },
        resolve: {
            alias: {
                '@/*': './src/*',
            },
        },
        plugins: [Vue()],
    } as UserConfig;
};
