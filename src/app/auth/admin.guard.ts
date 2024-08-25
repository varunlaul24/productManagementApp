import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate():boolean{
    if (
      this.authService.isAuthenticated() &&
      this.authService.getUserRole() === 'admin'
    ) {
      return true;
    } else {
      this.router.navigate(['/products/list']);
      return false;
    }
  }
}
