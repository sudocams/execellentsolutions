import { Routes } from '@angular/router';

import { AdminPanelLayoutComponent } from './layouts/adminPanel/AdminPanelLayout.component';
import { FrontendPanelLayoutComponent } from './layouts/frontendPanel/FrontendPanel.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { __assign } from 'tslib';
import { AssignPostComponent } from './student/assign-post/assign-post.component';
import { AllAssignmentsComponent } from './tutor/all-assignments/all-assignments.component';

export const AppRoutes: Routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full',
}, {
  path: '',
  component: FrontendPanelLayoutComponent,
  children: [{
    path: 'home',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'listing',
    loadChildren: () => import('./listing/listing.module').then(m => m.ListingModule)
  },
  {
    path: 'tutors',
    loadChildren: ()=> import('./tutor/tutor.module').then(m =>m.TutorModule)
  },
  
  {
    path: 'session',
    loadChildren: () => import('./session/session.module').then(m => m.SessionModule)
  },
  {
    path: '',
    loadChildren: () => import('./tutor/tutor.module').then(m => m.TutorModule)
  },
  {
    path: '',
    loadChildren :()=> import('./student/student.module').then(m =>m.StudentModule)
  },
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  }]
}, 
{
  path: 'admin',
  component: AdminPanelLayoutComponent,
  children: [{
    path: '',
    loadChildren: () => import('./adminPages/admin.module').then(m => m.AdminModule)
  }]
}
];
