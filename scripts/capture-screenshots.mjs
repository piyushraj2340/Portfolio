import { chromium } from "playwright";
import path from "path";
import { mkdirSync } from "fs";
import { fileURLToPath } from "url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const outDir =
  process.env.SCREENSHOT_DIR ||
  path.resolve(scriptDir, "../../../docs/Audit/screenshots");
const url = process.env.SCREENSHOT_URL || "http://localhost:3000";
const viewports = [
  { name: "mobile", width: 390, height: 844 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "desktop", width: 1440, height: 900 },
];

mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
for (const vp of viewports) {
  const page = await browser.newPage({
    viewport: { width: vp.width, height: vp.height },
    deviceScaleFactor: 2,
  });
  await page.goto(url, { waitUntil: "networkidle" });
  await page.waitForTimeout(2000);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(400);
  await page.screenshot({
    path: path.join(outDir, `final-${vp.name}-hero.png`),
    fullPage: false,
  });
  await page.screenshot({
    path: path.join(outDir, `final-${vp.name}-full.png`),
    fullPage: true,
  });
  console.log("Saved", vp.name, "->", outDir);
  await page.close();
}
await browser.close();
console.log("Done");
