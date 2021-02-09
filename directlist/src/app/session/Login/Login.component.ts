import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit{

   constructor(private router: Router){}

   ngOnInit(): void{}

   ngAfterViewInit()
   {
      
   }

   btnClick(){
     this.router.navigateByUrl('/session/sign-up');
   }

   onSubmit(){
     this.router.navigateByUrl('/tutors/questions')
   }

   authForm = new FormGroup({
     email: new FormControl('', [Validators.required]),
     
     password : new FormControl('',[Validators.required, Validators.minLength(7), Validators.maxLength(17)])
   });
   

};


