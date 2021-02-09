import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllAssignmentsComponent } from './all-assignments/all-assignments.component';

const routes: Routes = [
{
  path: 'questions',
  component: AllAssignmentsComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorRoutingModule { }
