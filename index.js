console.log(defaultArticles);
const articleListElement = document.getElementById('articleList');
const articleForm = document.getElementById('newArticleForm');
const newArticleTitle = document.getElementById('newArticleTitle');
const newArticleContent = document.getElementById('newArticleContent');

function createArticleDOMElement(articleObject) {
  const articleElement = document.createElement('li');
  articleElement.innerHTML = `<a href="articleDetails.html?articleId=${articleObject.id}" >${articleObject.title}</a>`;
  articleListElement.appendChild(articleElement);
}

for (let i = 0; i < articleList.length; i++) {
  const currentArticle = articleList[i];
  createArticleDOMElement(currentArticle);
}

articleForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const article = createArticle(newArticleTitle.value, newArticleContent.value);
  createArticleDOMElement(article);
});
