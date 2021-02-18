import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { SessionService } import './session.service'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authservice:SessionService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = this.authservice.getToken();
    const modifiedRequest = req.clone({
      headers: req.headers.set("Authorization","Bearer " + authToken),
    });
    return next.handle(modifiedRequest).pipe();
  }
}
