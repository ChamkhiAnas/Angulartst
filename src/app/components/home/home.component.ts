import { Category } from './../../models/category';
import { Article } from './../../models/article';

import { ArticleService } from './../../services/article.service';
import { CategoryService } from './../../services/category.service';


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  articles:Article[]=[];
  cats:Category[]=[];

  constructor(private articleService:ArticleService,private categoryService:CategoryService) { }

  ngOnInit() {
   this.getArticles();
   this.getCats();
  }

  getArticles(){
    this.articleService.getAll()
    .subscribe((res:Article[])=>{

      this.articles=res
      console.log(this.articles)


    });
 
  }

  getCats(){

    this.categoryService.getAll()

    .subscribe((res:Category[])=>{

      this.cats=res
      console.log(this.cats)



    })

 
  }

}
