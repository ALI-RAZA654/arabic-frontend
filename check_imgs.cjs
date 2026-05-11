const https = require('https');

const urls = [
  'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=500&q=80',
  'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&q=80',
  'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?w=500&q=80',
  'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500&q=80',
  'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=500&q=80',
  'https://images.unsplash.com/photo-1621360841013-c76831f181b1?w=500&q=80',
  'https://images.unsplash.com/photo-1582236353982-f67f25974dc8?w=500&q=80',
  'https://images.unsplash.com/photo-1548685913-fe6678babe8d?w=500&q=80',
  'https://images.unsplash.com/photo-1600889240409-5df14e21b16e?w=500&q=80',
  'https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=500&q=80',
  'https://images.unsplash.com/photo-1518133502844-469b823e4210?w=500&q=80',
  'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500&q=80',
  'https://images.unsplash.com/photo-1618923850107-0115024b4f03?w=500&q=80',
  'https://images.unsplash.com/photo-1585408985552-87f58a5ab2ea?w=500&q=80',
  'https://images.unsplash.com/photo-1623660044577-511ce3999e52?w=500&q=80'
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
