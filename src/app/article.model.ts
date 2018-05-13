export class Article {
  public views: number = 0;
  constructor(public title: string, public teaser: string, public author: string, public body: string, public img: string) {}
}
