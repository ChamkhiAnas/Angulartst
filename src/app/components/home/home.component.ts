import { ArticleService } from './../../services/article.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private articleService:ArticleService) { }

  ngOnInit() {
    this.getArticles()
  }

  getArticles(){
    this.articleService.getAll()
    .subscribe(res=>console.log(res))
  }

}
