// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mtasaStarlightThemePlugin from '@multitheftauto/starlight-theme-mtasa';
import { SITE_TITLE, SITE_URL, SITE_PREVIEW_URL } from './src/content.constants';

const isDeploy = process.env.CI === 'true' && process.env.CI_PREVIEW !== 'true';
const siteBaseUrl = isDeploy ? SITE_URL : SITE_PREVIEW_URL;

export default defineConfig({
    site: siteBaseUrl,
    redirects: {
        '/sa/trouble/downgrade-steam/':              '/sa/trouble/downgrade/',
        '/sa/trouble/serial-validation-pb/':         '/sa/trouble/serial-validation/',
        '/sa/trouble/serial-validation-ver/':        '/sa/trouble/serial-validation/',
        '/sa/trouble/gengta_error/':                 '/sa/trouble/createprocess-fail/',
        '/sa/trouble/launch-msvcr90.dll-missing/':   '/sa/trouble/launch-msvcr-dll-missing/',
        '/sa/trouble/launch-msvcr120.dll-missing/':  '/sa/trouble/launch-msvcr-dll-missing/',
        '/sa/trouble/launch-msvcr140.dll-missing/':  '/sa/trouble/launch-msvcr-dll-missing/',
        '/sa/trouble/vc-redist-missing/':            '/sa/trouble/launch-msvcr-dll-missing/',
        '/sa/trouble/launch-xpsp3-check/':           '/sa/trouble/launch-win10-check/',
        '/sa/trouble/vdetect/':                      '/sa/trouble/virus-activity/',
        '/sa/trouble/maybe-virus1/':                 '/sa/trouble/virus-activity/',
        '/sa/trouble/maybe-virus2/':                 '/sa/trouble/virus-activity/',
        '/sa/trouble/fraps/':                        '/sa/trouble/screen-recorder-kick/',
        '/sa/trouble/recorder/':                     '/sa/trouble/screen-recorder-kick/',
        '/sa/trouble/netlimiter/':                   '/sa/trouble/netlimiter-kick/',
        '/sa/trouble/lt-netlimiter/':                '/sa/trouble/netlimiter-kick/',
        '/sa/trouble/netcafe/':                      '/sa/trouble/netcafe-kick/',
        '/sa/trouble/not-used-menu-evolve/':         '/sa/trouble/incompatible-software/',
        '/sa/trouble/not-used-menu-gbpsv/':          '/sa/trouble/incompatible-software/',
        '/sa/trouble/d3dcreatedevice-fail/':         '/guides/graphics-drivers-issues/',
        '/sa/trouble/d3dresetdevice-fail/':          '/guides/graphics-drivers-issues/',
        '/sa/trouble/error-subrastering/':           '/guides/graphics-drivers-issues/',
        '/sa/trouble/fonts-create-sprite-fail/':     '/guides/graphics-drivers-issues/',
        '/sa/trouble/gui-render/':                   '/guides/graphics-drivers-issues/',
        '/sa/trouble/asi-files/':                    '/guides/how-to-remove-asi-files/',
        '/sa/trouble/au-revoir-xp-vista/':           '/general/system-requirements/',
        '/sa/trouble/general/':                      '/guides/troubleshooting-guide/',
        '/sa/trouble/gta_sa-missing/':               '/guides/troubleshooting-guide/',
        '/sa/trouble/crashing-before-gtagame/':      '/guides/troubleshooting-guide/',
        '/sa/trouble/crashing-before-gtalaunch/':    '/guides/troubleshooting-guide/',
        '/sa/trouble/loader-dll-missing/':           '/guides/troubleshooting-guide/',
        '/sa/trouble/loader-dll-not-loadable/':      '/guides/troubleshooting-guide/',
        '/sa/trouble/core-missing/':                 '/guides/troubleshooting-guide/',
        '/sa/trouble/core-not-loadable/':            '/guides/troubleshooting-guide/',
        '/sa/trouble/client-missing/':               '/guides/troubleshooting-guide/',
        '/sa/trouble/lua-missing/':                  '/guides/troubleshooting-guide/',
        '/sa/trouble/module-not-loadable/':          '/guides/troubleshooting-guide/',
    },
    trailingSlash: 'always',
    integrations: [
        starlight({
            plugins: [mtasaStarlightThemePlugin()],
            title: SITE_TITLE,
            favicon: '/favicon.ico',
            logo: {
                light: './src/assets/light-logo.png',
                dark: './src/assets/dark-logo.png',
                replacesTitle: true,
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
            head: [
                {
                    tag: 'meta',
                    attrs: {
                        name: 'keywords',
                        content: 'MTA,GTA,R*,Rockstar,North,Multi,Grand,Theft,Auto,Multiplayer,orange,san,andreas,mp,mod,modification,free,download,help,knowledge,base,guide,faq',
                    },
                },
            ],
        }),
    ],
});
