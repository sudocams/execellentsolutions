import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-all-assignments',
  templateUrl: './all-assignments.component.html',
  styleUrls: ['./all-assignments.component.css']
})
export class AllAssignmentsComponent implements OnInit {

  private _router: Subscription;
  url: string;

  isFixedClass : boolean = false; 

  constructor() { }

  ngOnInit(): void {
  }

  isFixedHeader()
   {
      if (this.url === '/listing/half-map/grid' || this.url === '/listing/half-map/list') {
         return true;
       } else {
         return false
       }
   }

}
