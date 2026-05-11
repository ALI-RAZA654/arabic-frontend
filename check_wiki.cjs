const https = require('https');

const urls = [
  'https://upload.wikimedia.org/wikipedia/commons/2/29/Snickers-Wrapper-Small.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/e/e0/Twix-Wrapper-Small.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/8/87/Bounty-Wrapper-Small.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/d/d4/Mars-Wrapper-Small.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/6/6b/Kit-Kat-Wrapper-Small.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/2/2e/Toblerone_3362.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/6/60/M%26M%27s-Wrapper-Small.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/d/de/Ferrero_Rocher_1.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Bounty-Wrapper-Small.jpg/800px-Bounty-Wrapper-Small.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Twix-Wrapper-Small.jpg/800px-Twix-Wrapper-Small.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Snickers-Wrapper-Small.jpg/800px-Snickers-Wrapper-Small.jpg'
];

async function check() {
  for (let u of urls) {
    await new Promise(r => {
      https.get(u, res => {
        console.log(res.statusCode, u);
        r();
      }).on('error', e => {
        console.log('err', u);
        r();
      });
    });
  }
}
check();
