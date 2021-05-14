import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../service/TokenStorage.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private tokenStorageService: TokenStorageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.tokenStorageService.getToken();
    if (token && !request.url.endsWith(environment.USER.LOGIN)) {
      const req = request.clone({ headers: request.headers.set('Authorization', `Bearer ${token}`) });
      return next.handle(req);
    }
    return next.handle(request);
  }
}
