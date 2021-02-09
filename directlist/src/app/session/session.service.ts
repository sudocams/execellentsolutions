import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

interface UserNameAvailable{
  available: boolean;
}
interface SignUpCredentials{
  username: string;
  password: string;
  passwordConfirmation: string;
}
interface signinCredentials{
  email: string;
  password: string;
}
interface signUpResponse{
  username: string;
}

interface signInResponse{
  password: string;
  username: string;
  email: string;
}
interface SignedInResponse{
  authenticated: boolean;
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor( private http: HttpClient) { }
  rootUrl ="https://api/";
  username ='';
  signin$ = new BehaviorSubject(null);

  userNameAvilable(userName:string){
    return this.http.post<UserNameAvailable>(this.rootUrl + '/auth/username',{
      username: userName
    });
  }

  signUp(credentials: SignUpCredentials){
    return this.http.post<signUpResponse>(this.rootUrl + 'auth/signup', credentials).
    pipe(tap((response)=>{
      this.signin$.next(true);
      this.username = response.username;
    }),);
  }
  checkAuth(){
    return this.http.get<SignedInResponse>(this.rootUrl + '/auth/signed').pipe(
      tap(({authenticated, username})=>{
        this.signin$.next(authenticated);
        this.username = username;
      })
    );
  }

  Signout(){
    return this.http.post(this.rootUrl + '/auth/signout', {}).pipe(
      tap(()=>{
        this.signin$.next(false);
      })
    )
  }

  signin(newCredentials:signinCredentials){
    return this.http.post<signInResponse>(this.rootUrl +'/auth/signin', newCredentials).pipe(
      tap((response)=>{
        this.signin$.next(true);
        this.username = response.username;
      })
    );
  }

}
