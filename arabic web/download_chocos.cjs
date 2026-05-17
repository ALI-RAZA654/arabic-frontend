const https = require('https');
const fs = require('fs');
const path = require('path');

const chocolates = {
  'snickers.jpg': 'https://upload.wikimedia.org/wikipedia/commons/2/29/Snickers-Wrapper-Small.jpg',
  'twix.jpg': 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Twix-Wrapper-Small.jpg',
  'bounty.jpg': 'https://upload.wikimedia.org/wikipedia/commons/8/87/Bounty-Wrapper-Small.jpg',
  'mars.jpg': 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Mars-Wrapper-Small.jpg',
  'kitkat.jpg': 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Kit-Kat-Wrapper-Small.jpg',
  'ferrero.jpg': 'https://upload.wikimedia.org/wikipedia/commons/d/de/Ferrero_Rocher_1.jpg',
  'galaxy.jpg': 'https://upload.wikimedia.org/wikipedia/commons/1/10/Chocolate_bar_split.jpg',
  'kinder.jpg': 'https://upload.wikimedia.org/wikipedia/commons/4/47/Kinder_Chocolate.jpg',
  'maltesers.jpg': 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Maltesers-Broken.jpg',
  'toblerone.jpg': 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Toblerone_3362.jpg'
};

const options = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)'
  }
};

async function downloadAll() {
  for (const [filename, url] of Object.entries(chocolates)) {
    const dest = path.join('./public', filename);
    await new Promise(resolve => {
      https.get(url, options, res => {
        if (res.statusCode === 200) {
          const file = fs.createWriteStream(dest);
          res.pipe(file);
          file.on('finish', () => {
            file.close();
            console.log(`Downloaded ${filename}`);
            resolve();
          });
        } else {
          console.log(`Failed ${filename}: ${res.statusCode}`);
          resolve();
        }
      }).on('error', err => {
        console.log(`Error ${filename}:`, err.message);
        resolve();
      });
    });
  }
}

downloadAll();
