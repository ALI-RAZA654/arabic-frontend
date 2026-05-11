fetch('https://alwateen.net/list-of-items')
  .then(r => r.text())
  .then(t => {
    const mp4Matches = t.match(/https?:\/\/[^\s"'><]+?\.mp4/gi);
    const srcMatches = t.match(/src=["']([^"']+\.mp4)["']/gi);
    console.log("MP4 URLs:", mp4Matches);
    console.log("SRC Matches:", srcMatches);
  })
  .catch(e => console.error(e));
