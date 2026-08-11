import { readFile, copyFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const WIDTH = 2400;
const HEIGHT = 1254;

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const svgPath = join(root, "scripts", "og-card.svg");
const outDir = join(root, "public", "og-images");
const jpgPath = join(outDir, "share-card.jpg");
const pngPath = join(outDir, "share-card.png");
const appDir = join(root, "src", "app");

const svg = await readFile(svgPath);
const base = sharp(Buffer.from(svg.toString("utf8"), "utf8"), {
  density: 288,
}).resize(WIDTH, HEIGHT, { fit: "fill" });

await mkdir(outDir, { recursive: true });

await base.clone().jpeg({ quality: 90, mozjpeg: true }).toFile(jpgPath);
await base.clone().png({ compressionLevel: 9 }).toFile(pngPath);
await copyFile(jpgPath, join(appDir, "opengraph-image.jpg"));
await copyFile(jpgPath, join(appDir, "twitter-image.jpg"));

const jpg = await readFile(jpgPath);
const png = await readFile(pngPath);
console.log(
  `OG images written ${WIDTH}x${HEIGHT}: jpg ${(jpg.length / 1024).toFixed(1)}KB, png ${(png.length / 1024).toFixed(1)}KB`
);
