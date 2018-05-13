import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../article.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articles: Article[];

  constructor(private router: Router) { }

  goToReadPage(clickedArticle: Article) {
    this.router.navigate(['articles', clickedArticle.id]);
  }

  ngOnInit() {
  }

}
