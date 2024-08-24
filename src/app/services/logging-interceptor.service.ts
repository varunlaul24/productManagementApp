import { AuthInterceptorService } from './auth-interceptor.service';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

export class LoggingInterceptorService implements AuthInterceptorService {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      console.log("Logging Interceptor called!");
      console.log('Request sent to URL: ' + req.url);
      return next.handle(req);
  }
}
