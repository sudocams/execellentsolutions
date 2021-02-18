import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment} from 'src/environments/environment'
import { Router } from '@angular/router'
import { Subject } from 'rxjs'
import { AuthData } from "./auth-data"


const BACKEND_URL = environment.userUrl + "/user"

@Injectable({
  providedIn: 'root',
})
export class SessionService {

  private isAuthenticated = false;
  private token: string;
  private tokenTimer:any;
  private userId: string;
  private authStatusListener = new Subject<boolean>();


  constructor( private http: HttpClient, private router: Router) { }

  getToken(){
    return this.token;
  }

  getAuthStatus(){
    return this.authStatusListener.asObservable();
  }

  getUserId(){
    return this.userId;
  }

  getIsAuth(){
    return this.isAuthenticated;
  }

  createUser(email: string, password:string){
    const authData:AuthData = {email:email, password:password};
    return this.http.post(BACKEND_URL + "/signup", authData).subscribe(
      ()=>{
        this.router.navigate(["/"]);
      },
      (error)=>{
        this.authStatusListener.next(false);
      });
  }

  login(email:string, password:string){
    const authData: AuthData ={email:email, password:password};

    this.http.post<{token: string; expiresIn: number; userId:string}>(
      BACKEND_URL + "/login", authData
    ).subscribe(
      (response)=>{
        const token = response.token;
        this.token = token;
        if(token){
          const expiresInDuration = response.expiresIn;
          this.setAuthTimer(expiresInDuration);
          this.isAuthenticated = true;
          this.userId = response.userId;
          this.authStatusListener.next(true);
          const now = new Date();
          const expirationDate = new Date(
            now.getTime() + expiresInDuration * 1000
          );
          this.saveAuthData(token, expirationDate, this.userId);
          this.router.navigate(["/"]);
        }
      },
      (error)=>{
        this.authStatusListener.next(false);
      }
    );
  }

  autoAuthUser(){
    const authInfo = this.getAuthData();
    if(!authInfo){
      return;
    }
    const now = new Date();
    const expiresIn = authInfo.expirationDate.getTime() - now.getTime();
    if(expiresIn > 0){
      this.token = authInfo.token;
      this.isAuthenticated = true;
      this.userId = authInfo.userId;
      this.setAuthTimer(expiresIn /1000);
      this.authStatusListener.next(true);
    }
  }

  logout(){
    this.token = null;
    this.isAuthenticated = false;
    clearTimeout(this.tokenTimer)
    this.authStatusListener.next(false);
    this.clearAuthData();
    this.userId = null;
    this.router.navigate(["/"])
  }

  private setAuthTimer(duration: number){
    this.tokenTimer = setTimeout(()=>{
      this.logout();

    }, duration * 1000)
  }

  private saveAuthData(token: string, expirationDate: Date, userId:string){
    localStorage.setItem("token", token);
    localhost.setItem("expiration", expirationDate.toIsoString());
    localStorage.setItem("userId", userId)
  }

  private clearAuthData(){
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
    localStorage.removeItem("userId");
  }

  private getAuthData(){
    const token = localStorage.getItem("token");
    const expirationDate = localStorage.getItem("expiration");
    const userId = localStorage.getItem("userId");

    if(!token || !expirationDate){
      return;
    }
    return{
      token:token, 
      expirationDate: new Date(expirationDate),
      userId: userId,
    };
  }

}
