import { Injectable } from '@angular/core';
import { Article } from './article.model';
// import { ARTICLES } from './mock-articles';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
@Injectable()
export class ArticleService {

  articles: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
        this.articles = database.list('articles');
  }

  getArticles() {
    return this.articles;
  }

  addArticle(newArticle: Article) {
    this.articles.push(newArticle);
  }

  getArticleById(articleId: string){
    return this.database.object('articles/' + articleId);
  }

  updateArticle(localUpdatedArticle){
    var articleEntryInFirebase = this.getArticleById(localUpdatedArticle.$key);
    articleEntryInFirebase.update({title: localUpdatedArticle.title, teaser: localUpdatedArticle.teaser, author: localUpdatedArticle.author, body:      localUpdatedArticle.body, img: localUpdatedArticle.img});
  }

  deleteArticle(localArticleToDelete){
    var articleEntryInFirebase = this.getArticleById(localArticleToDelete.$key);
    articleEntryInFirebase.remove();
  }
}
