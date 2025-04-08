const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateIcons() {
  const svgBuffer = fs.readFileSync(path.join(__dirname, '../public/heart.svg'));
  
  // Generate PNG icons
  await sharp(svgBuffer)
    .resize(192, 192)
    .png()
    .toFile(path.join(__dirname, '../public/heart-logo192.png'));

  await sharp(svgBuffer)
    .resize(512, 512)
    .png()
    .toFile(path.join(__dirname, '../public/heart-logo512.png'));

  // Generate favicon (multiple sizes in one .ico file)
  const sizes = [16, 24, 32, 64];
  const promises = sizes.map(size => 
    sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toBuffer()
  );

  const buffers = await Promise.all(promises);
  
  // Write the ICO file
  const ICO = require('ico-endec');
  const images = buffers.map((buffer, i) => ({
    width: sizes[i],
    height: sizes[i],
    data: buffer,
    bpp: 32
  }));

  const icoBuffer = ICO.encode(images);
  fs.writeFileSync(path.join(__dirname, '../public/heart-favicon.ico'), icoBuffer);
}

generateIcons().catch(console.error); 