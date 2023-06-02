import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { httpInterceptorProviders } from '.';
import { Observable } from 'rxjs';

@Injectable()
export class RouteLog implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
    console.log('Request: ' + req.url);
    return next.handle(req);
  }
}
