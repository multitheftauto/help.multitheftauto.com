// @ts-check
import { defineConfig } from 'astro/config';
import * as defaults from './src/constants/defaults';

export default defineConfig({
    site: defaults.SITE_URL,
});
