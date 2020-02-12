import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { Category } from './../../models/category';


@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {

  cats:Category[]=[];

  constructor(private categoryService:CategoryService) { }

  ngOnInit() {
    this.categoryService.getAll()
    .subscribe((res:Category[])=>{

      this.cats=res

    })
  }

}
