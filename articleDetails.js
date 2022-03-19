// getting the id of the article we want to show from the URL
const articleIdStr = window.location.search.replace('?articleId=', '');
const articleId = parseInt(articleIdStr, 10);
// Getting the article's information by searching the list of saved articles
const article = articleList.find((art) => art.id === articleId);
// retriving DOM elements that will contain the data of the article
const articleTitleElement = document.querySelector('#articleTitle');
const articleContentElement = document.querySelector('#articleContent');
// filling the elements
articleTitleElement.innerHTML = article.title;
articleContentElement.innerHTML = article.content;
