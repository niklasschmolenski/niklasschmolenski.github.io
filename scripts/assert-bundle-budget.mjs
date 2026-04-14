import { readdir, stat } from "node:fs/promises";
import path from "node:path";

const maxJsBytes = 500 * 1024;
const maxCssBytes = 90 * 1024;

const assetsDir = path.resolve("dist/assets");
const assetNames = await readdir(assetsDir);

const jsAssets = assetNames.filter((name) => name.endsWith(".js"));
const cssAssets = assetNames.filter((name) => name.endsWith(".css"));

const failures = [];

const getLargestAsset = async (files) => {
  let largest = null;

  for (const file of files) {
    const filePath = path.join(assetsDir, file);
    const fileStats = await stat(filePath);
    if (!largest || fileStats.size > largest.size) {
      largest = { file, size: fileStats.size };
    }
  }

  return largest;
};

const largestJs = await getLargestAsset(jsAssets);
const largestCss = await getLargestAsset(cssAssets);

if (!largestJs) {
  failures.push("No JavaScript assets found in dist/assets.");
} else if (largestJs.size > maxJsBytes) {
  failures.push(
    `Largest JS bundle ${largestJs.file} is ${(largestJs.size / 1024).toFixed(1)}KB (limit ${(maxJsBytes / 1024).toFixed(1)}KB).`,
  );
}

if (!largestCss) {
  failures.push("No CSS assets found in dist/assets.");
} else if (largestCss.size > maxCssBytes) {
  failures.push(
    `Largest CSS bundle ${largestCss.file} is ${(largestCss.size / 1024).toFixed(1)}KB (limit ${(maxCssBytes / 1024).toFixed(1)}KB).`,
  );
}

if (failures.length > 0) {
  console.error("Bundle budget assertions failed:\n");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("Bundle budget assertions passed.");
