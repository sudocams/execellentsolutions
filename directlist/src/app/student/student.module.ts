import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { AssignPostComponent } from './assign-post/assign-post.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AssignPostComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StudentRoutingModule,ReactiveFormsModule
  ]
})
export class StudentModule { }
