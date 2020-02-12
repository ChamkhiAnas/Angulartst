import { ListArticleComponent } from './components/list-article/list-article.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ShowComponent } from './components/show/show.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [


  {path:"article",component:ListArticleComponent},
  {path: "",redirectTo: '/article',pathMatch:'full'},
  {path:"article/:id",component:ShowComponent},
  {path:"**",component:PageNotFoundComponent},


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
