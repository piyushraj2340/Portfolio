import { readFile, copyFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const svgPath = join(root, "scripts", "og-card.svg");
const outDir = join(root, "public", "og-images");
const jpgPath = join(outDir, "og-image.jpg");
const pngPath = join(outDir, "og-image.png");
const appDir = join(root, "src", "app");

const svg = await readFile(svgPath);
const base = sharp(Buffer.from(svg.toString("utf8"), "utf8"), {
  density: 144,
}).resize(1200, 630, { fit: "fill" });

await mkdir(outDir, { recursive: true });

await base
  .clone()
  .jpeg({ quality: 86, mozjpeg: true })
  .toFile(jpgPath);

await base
  .clone()
  .png({ compressionLevel: 9 })
  .toFile(pngPath);

await copyFile(jpgPath, join(appDir, "opengraph-image.jpg"));
await copyFile(jpgPath, join(appDir, "twitter-image.jpg"));

const jpg = await readFile(jpgPath);
const png = await readFile(pngPath);
console.log(
  `OG images written: jpg ${(jpg.length / 1024).toFixed(1)}KB, png ${(png.length / 1024).toFixed(1)}KB`
);
