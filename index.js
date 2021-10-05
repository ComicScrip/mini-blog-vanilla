const articleList = document.querySelector('#articleList');

for (let i = 0; i < savedArticles.length; i++) {
  const currentArticle = savedArticles[i];
  const articleListItem = document.createElement('li');
  articleListItem.innerHTML = `<a href="articleDetails.html?articleId=${currentArticle.id}">
    ${currentArticle.title}
  </a>`;
  articleList.appendChild(articleListItem);
}
