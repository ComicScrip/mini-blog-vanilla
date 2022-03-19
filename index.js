const articleListElement = document.querySelector('#articleList');
const newArticleForm = document.getElementById('newArticleForm');
const newArticleTitleInput = document.getElementById('newArticleTitle');
const newArticleContent = document.getElementById('newArticleContent');

function createArticleElement(article) {
  const articleListItemElement = document.createElement('li');
  articleListItemElement.innerHTML = `<a href="articleDetails.html?articleId=${article.id}">
    ${article.title}
  </a>`;
  return articleListItemElement;
}

// display saved articles
for (let i = 0; i < articleList.length; i++) {
  const currentArticle = articleList[i];
  articleListElement.appendChild(createArticleElement(currentArticle));
}

// add an article an persist it in local storage
newArticleForm.addEventListener('submit', () => {
  const newArticle = createAndSaveArticle(
    newArticleTitleInput.value,
    newArticleContent.value
  );
  articleListElement.appendChild(createArticleElement(newArticle));
});
