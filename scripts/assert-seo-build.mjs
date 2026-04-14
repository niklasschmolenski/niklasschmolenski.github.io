import { readFile } from "node:fs/promises";
import path from "node:path";

const distDir = path.resolve("dist");
const htmlPath = path.join(distDir, "index.html");
const robotsPath = path.join(distDir, "robots.txt");
const sitemapPath = path.join(distDir, "sitemap.xml");

const requiredHeadSnippets = [
  '<link rel="canonical" href="https://niklasschmolenski.github.io/">',
  'meta property="og:title"',
  'meta property="og:description"',
  'meta property="og:url"',
  'meta property="og:image"',
  'meta name="twitter:title"',
  'meta name="twitter:description"',
  'type="application/ld+json"',
];

const failures = [];

const html = await readFile(htmlPath, "utf8");
const robots = await readFile(robotsPath, "utf8");
const sitemap = await readFile(sitemapPath, "utf8");

if (html.includes('<div id="root"></div>')) {
  failures.push("Prerender failed: root container is empty in dist/index.html.");
}

if (!html.includes("Niklas Schmolenski")) {
  failures.push("Prerendered HTML is missing expected homepage content.");
}

for (const snippet of requiredHeadSnippets) {
  if (!html.includes(snippet)) {
    failures.push(`Missing SEO tag snippet: ${snippet}`);
  }
}

const cvcheckedAnchorPattern = /<a[^>]*href="https:\/\/cvchecked\.com"[^>]*>([^<]+)<\/a>/i;
const cvcheckedAnchor = html.match(cvcheckedAnchorPattern);
if (!cvcheckedAnchor) {
  failures.push("Missing visible text anchor to https://cvchecked.com in dist/index.html.");
}

const cvcheckedTagPattern = /<a[^>]*href="https:\/\/cvchecked\.com"[^>]*>/i;
const cvcheckedTagMatch = html.match(cvcheckedTagPattern);
if (cvcheckedTagMatch) {
  const tag = cvcheckedTagMatch[0];
  const relMatch = tag.match(/rel="([^"]+)"/i);
  if (relMatch) {
    const relValue = relMatch[1].toLowerCase();
    for (const blockedRel of ["nofollow", "ugc", "sponsored", "noreferrer"]) {
      if (relValue.includes(blockedRel)) {
        failures.push(`cvchecked.com anchor contains blocked rel token: ${blockedRel}`);
      }
    }
  }
}

if (!robots.includes("Sitemap: https://niklasschmolenski.github.io/sitemap.xml")) {
  failures.push("robots.txt is missing the sitemap reference.");
}

if (!sitemap.includes("<loc>https://niklasschmolenski.github.io/</loc>")) {
  failures.push("sitemap.xml is missing the root URL.");
}

if (failures.length > 0) {
  console.error("SEO build assertions failed:\n");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("SEO build assertions passed.");
