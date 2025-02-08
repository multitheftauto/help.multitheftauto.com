import type { APIRoute } from 'astro';

const getRobotsTxt = (sitemapURL: URL) => {
    let previewToggle = sitemapURL.href.includes('.preview.') ? 'Disallow' : 'Allow';
    return `User-agent: *
${previewToggle}: /

Sitemap: ${sitemapURL.href}
`;
}

export const GET: APIRoute = ({ site }) => {
    const sitemapURL = new URL('sitemap-index.xml', site);
    return new Response(getRobotsTxt(sitemapURL));
};
