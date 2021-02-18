import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type?: string;
  children?: Menu[];
}

const MENUITEMS = [
  {
    state: 'home',
    name: 'Home',
    type: 'link',
  },
  {
    state: 'session',
    name: 'Login',
    type: 'link',
  },

  {
    state: 'post',
    name: 'Order Now',
    type: 'link',
  },
    {
    state: 'pages',
    name: 'Pages',
    type: 'sub',
    children: [
  
      {
         state: 'blog', 
         name: 'blog', 
         type: 'sub',
         children: [
            {state: 'list', name: 'List', type: 'link'},
          ]
      },
      {state: 'about-us', name: 'About', type: 'link'},
      {state: 'user-profile', name: 'Profile', type: 'link'},
      {state: 'contact-us', name: 'Contact', type: 'link'}
    ]
  },
];


@Injectable()
export class MenuItems {
  getAll() {
    return MENUITEMS;
  }
}
