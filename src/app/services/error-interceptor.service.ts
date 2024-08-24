import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";
import { Injectable } from '@angular/core';

@Injectable()
export class ErrorInterceptorService implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err instanceof HttpErrorResponse) {
          if (err.error instanceof ErrorEvent) {
            console.log('Error Event:', err.error.message);
          } else {
            switch (err.status) {
              case 401:
                console.log("Error 401: Unauthorized");
                break;
              case 403:
                console.log("Error 403: Forbidden");
                break;
              case 404:
                console.log("Error 404: Not Found");
                break;
              case 503:
                console.log("Error 503: Service Unavailable");
                break;
              default:
                console.log(`Error ${err.status}: ${err.statusText}`);
            }
          }
        }
        return throwError(() => new Error(err.message));
      })
    );
  }
}