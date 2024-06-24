function getArticleGenerator(articles) {
    let resultArea = document.querySelector('#content');

    return () => {
    if(articles.length > 0){
        let article = document.createElement('article');
        article.append(articles[0]); articles.shift();
        resultArea.append(article);}
    }
}
