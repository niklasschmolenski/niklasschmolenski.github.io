import { defineConfig, type HtmlTagDescriptor } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { siteJsonLd, siteMeta } from "./src/content/siteMeta";

const toAbsoluteUrl = (url: string) => new URL(url, `${siteMeta.siteUrl}/`).toString();

const buildSeoTags = (): HtmlTagDescriptor[] => {
  const canonicalUrl = `${siteMeta.siteUrl}/`;
  const ogImageUrl = toAbsoluteUrl(siteMeta.ogImage);

  return [
    { tag: "title", children: siteMeta.title, injectTo: "head-prepend" },
    {
      tag: "meta",
      attrs: { name: "description", content: siteMeta.description },
      injectTo: "head",
    },
    {
      tag: "meta",
      attrs: { name: "author", content: siteMeta.author },
      injectTo: "head",
    },
    {
      tag: "meta",
      attrs: { name: "robots", content: "index, follow" },
      injectTo: "head",
    },
    {
      tag: "meta",
      attrs: { property: "og:title", content: siteMeta.title },
      injectTo: "head",
    },
    {
      tag: "meta",
      attrs: { property: "og:description", content: siteMeta.description },
      injectTo: "head",
    },
    {
      tag: "meta",
      attrs: { property: "og:type", content: "website" },
      injectTo: "head",
    },
    {
      tag: "meta",
      attrs: { property: "og:url", content: canonicalUrl },
      injectTo: "head",
    },
    {
      tag: "meta",
      attrs: { property: "og:image", content: ogImageUrl },
      injectTo: "head",
    },
    {
      tag: "meta",
      attrs: { property: "og:locale", content: siteMeta.locale },
      injectTo: "head",
    },
    {
      tag: "meta",
      attrs: { name: "twitter:card", content: "summary_large_image" },
      injectTo: "head",
    },
    {
      tag: "meta",
      attrs: { name: "twitter:site", content: siteMeta.social.twitterSite },
      injectTo: "head",
    },
    {
      tag: "meta",
      attrs: { name: "twitter:creator", content: siteMeta.social.twitterCreator },
      injectTo: "head",
    },
    {
      tag: "meta",
      attrs: { name: "twitter:title", content: siteMeta.title },
      injectTo: "head",
    },
    {
      tag: "meta",
      attrs: { name: "twitter:description", content: siteMeta.description },
      injectTo: "head",
    },
    {
      tag: "meta",
      attrs: { name: "twitter:image", content: ogImageUrl },
      injectTo: "head",
    },
    {
      tag: "link",
      attrs: { rel: "canonical", href: canonicalUrl },
      injectTo: "head",
    },
    {
      tag: "link",
      attrs: { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      injectTo: "head",
    },
    {
      tag: "script",
      attrs: { type: "application/ld+json" },
      children: JSON.stringify(siteJsonLd),
      injectTo: "head",
    },
  ];
};

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    {
      name: "inject-seo-head-tags",
      transformIndexHtml(html) {
        return { html, tags: buildSeoTags() };
      },
    },
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
}));
