/* Barrel of the interceptors */
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { TokenInterceptor } from "./token.interceptor";
import { RouteLog } from "./route-log.interceptor";

//Http interceptor providers in outside-in order
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: RouteLog, multi: true}
];
