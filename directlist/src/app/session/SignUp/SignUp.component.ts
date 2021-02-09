import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'signup',
  templateUrl: './SignUp.component.html',
  styleUrls: ['./SignUp.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SignUpComponent implements OnInit{

  SignupForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
    location: new FormControl('', [Validators.required]),
    sampleTask: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    passwordConfirm : new FormControl('',[Validators.required, Validators.minLength(7), Validators.maxLength(17)])
  });

   constructor( private router: Router){}

   ngOnInit(){}

   ngAfterViewInit()
   {
      
   }
   onSubmit(){
     this.router.navigateByUrl('/session/login');
   }
}
