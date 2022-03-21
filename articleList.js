const defaultArticles = [
  { id: 1, title: 'test1', content: 'test content 1' },
  { id: 2, title: 'test2', content: 'test content 2' },
];

const savedArticles = JSON.parse(localStorage.getItem('articleList'));

let articleList;
if (savedArticles) {
  articleList = savedArticles;
} else {
  articleList = defaultArticles;
}

console.log('list', articleList);

let lastId = articleList[articleList.length - 1].id;

function createArticle(title, content) {
  const newArticle = {
    title: title,
    content: content,
    id: ++lastId,
  };
  articleList.push(newArticle);
  localStorage.setItem('articleList', JSON.stringify(articleList));
  return newArticle
}
