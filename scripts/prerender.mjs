import { pathToFileURL } from "node:url";
import { readFile, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const distDir = path.resolve("dist");
const ssrOutDir = path.resolve("dist-server");

const ssrFiles = await readdir(ssrOutDir);
const entryServerFile = ssrFiles.find((file) => file.startsWith("entry-server."));

if (!entryServerFile) {
  throw new Error("SSR entry bundle not found in dist-server.");
}

const entryPath = path.join(ssrOutDir, entryServerFile);
const entryModule = await import(pathToFileURL(entryPath).href);
const render = entryModule.render;

if (typeof render !== "function") {
  throw new Error("SSR entry bundle does not export a render() function.");
}

const templatePath = path.join(distDir, "index.html");
const template = await readFile(templatePath, "utf8");
const appHtml = render();

const output = template.replace(
  '<div id="root"></div>',
  `<div id="root">${appHtml}</div>`,
);

await writeFile(templatePath, output, "utf8");
await rm(ssrOutDir, { recursive: true, force: true });

console.log("Prerendered / into dist/index.html");
