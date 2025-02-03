// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mtasaStarlightThemePlugin from '@multitheftauto/starlight-theme-mtasa';
import { SITE_TITLE, SITE_URL } from './src/content.constants';

const isDeploy = process.env.CI === 'true';
const siteBaseUrl = isDeploy ? SITE_URL : undefined;

export default defineConfig({
    site: siteBaseUrl,
    redirects: {
        '/sa/trouble/downgrade-steam/':           '/sa/trouble/downgrade/',
        '/sa/trouble/serial-validation-ver/':     '/sa/trouble/serial-validation/',
        '/sa/trouble/gengta_error/':              '/sa/trouble/createprocess-fail/',
        '/sa/trouble/d3dcreatedevice-fail/':      '/guides/graphics-drivers-issues/',
        '/sa/trouble/d3dresetdevice-fail/':       '/guides/graphics-drivers-issues/',
        '/sa/trouble/error-subrastering/':        '/guides/graphics-drivers-issues/',
        '/sa/trouble/fonts-create-sprite-fail/':  '/guides/graphics-drivers-issues/',
        '/sa/trouble/gui-render/':                '/guides/graphics-drivers-issues/',
        '/sa/trouble/asi-files/':                 '/guides/how-to-remove-asi-files/',
        '/sa/trouble/au-revoir-xp-vista/':        '/general/system-requirements/',
        '/sa/trouble/general/':                   '/guides/troubleshooting-guide/',
        '/sa/trouble/gta_sa-missing/':            '/guides/troubleshooting-guide/',
        '/sa/trouble/crashing-before-gtagame/':   '/guides/troubleshooting-guide/',
        '/sa/trouble/crashing-before-gtalaunch/': '/guides/troubleshooting-guide/',
        '/sa/trouble/loader-dll-missing/':        '/guides/troubleshooting-guide/',
        '/sa/trouble/loader-dll-not-loadable/':   '/guides/troubleshooting-guide/',
        '/sa/trouble/core-missing/':              '/guides/troubleshooting-guide/',
        '/sa/trouble/core-not-loadable/':         '/guides/troubleshooting-guide/',
        '/sa/trouble/client-missing/':            '/guides/troubleshooting-guide/',
        '/sa/trouble/lua-missing/':               '/guides/troubleshooting-guide/',
        '/sa/trouble/module-not-loadable/':       '/guides/troubleshooting-guide/',
    },
    trailingSlash: 'always',
    integrations: [
        starlight({
            plugins: [mtasaStarlightThemePlugin()],
            title: SITE_TITLE,
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
            },
            components: {
                Pagination: './src/overrides/Pagination.astro',
            },
            sidebar: [
                {
                    label: 'General',
                    autogenerate: { directory: 'general' },
                },
                {
                    label: 'Guides',
                    autogenerate: { directory: 'guides' },
                },
                {
                    label: 'Troubleshooting',
                    autogenerate: { directory: 'sa/trouble' },
                },
            ],
        }),
    ],
});
