const fs = require('fs');
const https = require('https');

const url = 'https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-connection-background-9095-large.mp4';
const path = './public/bg-video.mp4';

// Simple download function handling redirects
function download(url, dest) {
  https.get(url, (res) => {
    if (res.statusCode === 301 || res.statusCode === 302) {
      return download(res.headers.location, dest);
    }
    const file = fs.createWriteStream(dest);
    res.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log('Download complete');
    });
  }).on('error', (err) => {
    fs.unlink(dest, () => {});
    console.error('Error downloading:', err.message);
  });
}

download(url, path);
