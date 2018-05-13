import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../article.model';
import { ArticleService } from '../article.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ArticleService]
})
export class HomeComponent implements OnInit {

  articles: FirebaseListObservable<any[]>;

  constructor(private router: Router, private articleService: ArticleService) { }

  goToReadPage(clickedArticle) {
    this.router.navigate(['articles', clickedArticle.$key]);
  }

  ngOnInit() {
    this.articles = this.articleService.getArticles();
  }

}
