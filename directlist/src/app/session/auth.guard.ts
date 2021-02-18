import { Injectable } from '@angular/core';
import { 
  CanActivate, 
  ActivatedRouteSnapshot, 
  RouterStateSnapshot,
  Router, 
  UrlTree
 } from '@angular/router';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authservice: SessionService ){}
  canActivate(

    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): 
    | Observable<boolean | UrlTree> 
    | Promise<boolean | UrlTree> 
    | boolean 
    | UrlTree {
      const isAuth = this.authservice.getIsAuth();
      if(isAuth){
        this.router.naviagate(["/login"])
      }
    return isAuth;
  }
  
}
