import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fistcomponent',
  templateUrl: './fistcomponent.component.html',
  styleUrls: ['./fistcomponent.component.css']
})
export class FistcomponentComponent implements OnInit {

   /** Title for section **/
   @Input('title') Title: any = 'Dummy Title';

   /** Desc for section **/
   @Input('desc') Desc: any = 'Dummy Description';

   /** data for section **/
   @Input('data') Data: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){}

}
