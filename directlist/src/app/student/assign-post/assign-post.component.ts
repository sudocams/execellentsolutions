import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-assign-post',
  templateUrl: './assign-post.component.html',
  styleUrls: ['./assign-post.component.css']
})
export class AssignPostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  postForm = new FormGroup({
    Title: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]),   
    subject: new FormControl('', [Validators.required,Validators.minLength(4), Validators.maxLength(30)]),
    instructions: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]),
    postDate: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]),
    dueDate: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]),
    fileAttachment: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]),
    cost: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]),
    selectTutor: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(30)])
  });

  onSubmit(){}

}
