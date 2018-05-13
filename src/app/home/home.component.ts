import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../article.model';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ArticleService]
})
export class HomeComponent implements OnInit {

  articles: Article[];

  constructor(private router: Router, private articleService: ArticleService) { }

  goToReadPage(clickedArticle: Article) {
    this.router.navigate(['articles', clickedArticle.id]);
  }

  ngOnInit() {
    this.articles = this.articleService.getArticles();
  }

}
