import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Article } from '../article.model';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css'],
  providers: [ArticleService]
})
export class ReadComponent implements OnInit {

  articleId: number;
  articleToDisplay: Article;

  constructor(private route: ActivatedRoute, private location: Location, private articleService: ArticleService) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.articleId = parseInt(urlParameters['id']);
    });
    this.articleToDisplay = this.articleService.getArticleById(this.articleId);
  }

}
