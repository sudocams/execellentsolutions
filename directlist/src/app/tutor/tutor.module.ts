import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorRoutingModule } from './tutor-routing.module';
import { AllAssignmentsComponent } from './all-assignments/all-assignments.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GlobalModule } from '../globalFrontendComponents/global.module';


@NgModule({
  declarations: [AllAssignmentsComponent],
  imports: [
    CommonModule,
    TutorRoutingModule,
    ReactiveFormsModule,
    GlobalModule,
   
  ]
})
export class TutorModule { }
