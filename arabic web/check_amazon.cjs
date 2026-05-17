const https = require('https');

const urls = [
  'https://m.media-amazon.com/images/I/61fW8-JzYJL._AC_SL1500_.jpg', // Galaxy
  'https://m.media-amazon.com/images/I/71uA+-R9G1L._AC_SL1500_.jpg', // Snickers
  'https://m.media-amazon.com/images/I/71Ww24+Q9CL._AC_SL1500_.jpg', // Twix
  'https://m.media-amazon.com/images/I/61F9O5V-eRL._AC_SL1500_.jpg', // Bounty
  'https://m.media-amazon.com/images/I/61u9n1L0vPL._AC_SL1500_.jpg', // Mars
  'https://m.media-amazon.com/images/I/51H0lEIt8hL._AC_SL1500_.jpg', // Kitkat
  'https://m.media-amazon.com/images/I/61qH+OOhJYL._AC_SL1500_.jpg', // Kinder Bueno
  'https://m.media-amazon.com/images/I/71c9qU5J4AL._AC_SL1500_.jpg', // Ferrero
  'https://m.media-amazon.com/images/I/71r-iB3iO9L._AC_SL1500_.jpg', // Maltesers
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
