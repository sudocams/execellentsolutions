import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignPostComponent } from './assign-post/assign-post.component';

const routes: Routes = [{
  path: 'post',
  component: AssignPostComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
