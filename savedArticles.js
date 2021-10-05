const savedArticles = JSON.parse(localStorage.getItem('savedArticles')) || [
  { id: 1, title: 'my first article', content: 'my first article content' },
  { id: 2, title: 'my second article', content: 'my second article content' },
];
