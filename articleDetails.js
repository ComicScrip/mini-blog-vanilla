const articleId = parseInt(window.location.search.replace('?articleId=', ''));
const articleTitleElement = document.getElementById('articleTitle');
const articleContentElement = document.getElementById('articleContent');

console.log(articleId);
let article = null;

for (let i = 0; i < articleList.length; i++) {
  const currentArticle = articleList[i];
  if (currentArticle.id === articleId) {
    article = currentArticle;
  }
}

articleTitleElement.innerText = article.title;
articleContentElement.innerText = article.content;
