// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mtasaStarlightThemePlugin from '@multitheftauto/starlight-theme-mtasa';
import * as constants from './src/content.constants';

const isDeploy = process.env.CI === 'true';
const siteBaseUrl = isDeploy ? constants.SITE_URL : undefined;

export default defineConfig({
    site: siteBaseUrl,
    redirects: {
        '/sa/trouble/crashing-before-gtagame/':   '/sa/trouble/general/',
        '/sa/trouble/crashing-before-gtalaunch/': '/sa/trouble/general/',
    },
    integrations: [
        starlight({
            plugins: [mtasaStarlightThemePlugin()],
            title: constants.SITE_TITLE,
            favicon: '/favicon.ico',
            logo: {
                src: './src/assets/logo.png',
            },
            titleDelimiter: '—',
            lastUpdated: true,
            editLink: {
                baseUrl: 'https://github.com/multitheftauto/help.multitheftauto.com/edit/main/',
            },
            social: {
                github: 'https://github.com/multitheftauto/help.multitheftauto.com',
                discord: 'https://discord.com/invite/mtasa',
                youtube: 'https://youtube.com/user/mtaqa',
                twitch: 'https://twitch.tv/mtaqa',
                'x.com': 'https://x.com/mtaqa',
            },
            components: {
                Pagination: './src/overrides/Pagination.astro',
            },
            sidebar: [
                {
                    label: 'Guides',
                    items: [
                        { label: 'Example Guide', slug: 'guides/example' },
                    ],
                },
                {
                    label: 'Reference',
                    autogenerate: { directory: 'reference' },
                },
                {
                    label: 'Troubleshooting',
                    autogenerate: { directory: 'sa/trouble' },
                    collapsed: true,
                },
            ],
        }),
    ],
});
