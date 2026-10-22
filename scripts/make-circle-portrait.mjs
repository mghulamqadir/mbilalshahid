import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function main() {
  const size = 600;
  const bgSvg = `
    <svg width="${size}" height="${size}">
      <defs>
        <radialGradient id="grad" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stop-color="#B68BAE" />
          <stop offset="50%" stop-color="#703362" />
          <stop offset="100%" stop-color="#35172F" />
        </radialGradient>
      </defs>
      <circle cx="${size/2}" cy="${size/2}" r="${size/2}" fill="url(#grad)" />
    </svg>
  `;

  const bg = await sharp(Buffer.from(bgSvg)).png().toBuffer();

  const portrait = await sharp('public/media/bilal-transparent.png')
    .resize(size, size, { fit: 'cover', position: 'top' })
    .toBuffer();

  const composited = await sharp(bg)
    .composite([{ input: portrait, blend: 'over' }])
    .png()
    .toBuffer();

  const maskSvg = `
    <svg width="${size}" height="${size}">
      <circle cx="${size/2}" cy="${size/2}" r="${size/2}" fill="white" />
    </svg>
  `;
  const mask = await sharp(Buffer.from(maskSvg)).png().toBuffer();

  const outDir = path.resolve('public/media/portrait');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  await sharp(composited)
    .composite([{ input: mask, blend: 'dest-in' }])
    .png()
    .toFile(path.join(outDir, 'bilal-circle.png'));

  console.log('Successfully saved public/media/portrait/bilal-circle.png');
}

main().catch(console.error);
