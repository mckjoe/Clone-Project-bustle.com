import { Injectable } from '@angular/core';
import { Article } from './article.model';
import { ARTICLES } from './mock-articles';

@Injectable()
export class ArticleService {

  constructor() { }

  getArticles() {
    return ARTICLES;
  }

  getArticleById(articleId: number){
    for (var i = 0; i <= ARTICLES.length - 1; i++) {
      if (ARTICLES[i].id === articleId) {
        return ARTICLES[i];
      }
    }
  }

}
