const https = require('https');

const urls = [
  'https://images.openfoodfacts.org/images/products/500/015/946/1122/front_en.164.400.jpg', // Snickers
  'https://images.openfoodfacts.org/images/products/500/015/945/9228/front_en.161.400.jpg', // Twix
  'https://images.openfoodfacts.org/images/products/500/015/946/2129/front_en.111.400.jpg', // Bounty
  'https://images.openfoodfacts.org/images/products/500/015/945/9211/front_en.154.400.jpg', // Mars
  'https://images.openfoodfacts.org/images/products/761/303/462/6844/front_en.216.400.jpg', // Kitkat
  'https://images.openfoodfacts.org/images/products/8000500003787/front_en.87.400.jpg',    // Ferrero
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
