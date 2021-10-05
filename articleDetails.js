function getArticleIdFromUrl() {
  return parseInt(
    JSON.parse(
      '{"' +
        decodeURI(window.location.search.substring(1))
          .replace(/"/g, '\\"')
          .replace(/&/g, '","')
          .replace(/=/g, '":"') +
        '"}'
    ).articleId
  );
}

const articleId = getArticleIdFromUrl();
const article = savedArticles.find((art) => art.id === articleId);
const articleTitle = document.querySelector('#articleTitle');
const articleContent = document.querySelector('#articleContent');

articleTitle.innerHTML = article.title;
articleContent.innerHTML = article.content;
