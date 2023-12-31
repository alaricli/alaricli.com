import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { BlogComponent } from '../components/blog/blog.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  }, 
  {
    path: 'blog', 
    component: BlogComponent
  },
  {
    path: '**', 
    component: HomeComponent, pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
