import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http:HttpClient,private _router:Router) { }


  getAll(){
    return this.http.get<any>("http://localhost:8000/api/article");
  }





}
