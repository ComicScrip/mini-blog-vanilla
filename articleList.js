const defaultArticles = [
  { id: 1, title: 'my first article', content: 'my first article content' },
  { id: 2, title: 'my second article', content: 'my second article content' },
];
const savedArticles = JSON.parse(localStorage.getItem('savedArticles'));
const articleList = savedArticles || defaultArticles;
let lastId = articleList[articleList.length - 1].id || 0;

function createAndSaveArticle(title, content) {
  const newArticle = {
    id: ++lastId,
    title,
    content,
  };
  articleList.push(newArticle);
  localStorage.setItem('savedArticles', JSON.stringify(articleList));
}
