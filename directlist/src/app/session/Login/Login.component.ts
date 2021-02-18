import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService} from "../session.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit{

  private authStatusSub: Subscription;
  isLoading = false;

   constructor(private router: Router, private authservice: SessionService){}

   authForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    
    password : new FormControl('',[Validators.required, Validators.minLength(7), Validators.maxLength(17)])
  });

   ngOnInit(){
    this.authStatusSub = this.authservice.getAuthStatus()
    .subscribe((authstatus)=>{
      this.isLoading = false;
    })
   }

   ngAfterViewInit(){}

   btnClick(){
     this.router.navigateByUrl('/session/sign-up');
   }

   onSubmit(){
    if(this.authForm.invalid){
      return;
    }
    this.isLoading = true;
    this.authservice.login(this.authForm.value);
     this.router.navigateByUrl('/tutors/questions');
   }


   ngOnDestroy(){
     this.authStatusSub.unsubscribe();
   }
   
};


