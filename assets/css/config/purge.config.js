module.exports = {
  enabled: process.env.HUGO_ENV ? process.env.HUGO_ENV !== 'development' : false,
  content: [
    './hugo_stats.json',
    './func/*.html',
    './layouts/**/*.html',
    './assets/js/**/*.jsx'
  ],
  extractors: [
    {
      extractor: (content) => {
        let els = JSON.parse(content).htmlElements;
        return els.tags.concat(els.classes, els.ids);
      },
      extensions: ['json']
    },
  ],
  options: {
    safelist: ["h-10"],
  }
}