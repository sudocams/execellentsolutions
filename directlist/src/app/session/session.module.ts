import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './Login/Login.component';
import { SignUpComponent } from './SignUp/SignUp.component';
import { ForgotPasswordComponent } from './ForgotPassword/ForgotPassword.component';
import { ComingSoonComponent } from './ComingSoon/ComingSoon.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { SessionRoutes } from './session.routing';
import { ErrorComponent } from './error/error.component';
import { LogoutComponent } from './logout/logout.component';
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
     MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    RouterModule.forChild(SessionRoutes)
  ],
  declarations: [ 
    LoginComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    ComingSoonComponent,
    ErrorComponent,
    LogoutComponent,
  ],
/* providers:[
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ] */
})

export class SessionModule {}
