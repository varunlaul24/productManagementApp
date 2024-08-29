import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router
} from '@angular/router';
import { AuthService } from './auth.service';
import { last, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  userRole: 'admin' | 'customer' | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  // Using Observable so that it resolves once the role is fetched. This will ensure that the role is determined before the guard decides whether to allow navigation.
  canActivate(): Observable<boolean> {
    return this.authService.fetchUserRole().pipe(
      map(() => {
        const userRole = this.authService.getUserRole();
        if (userRole === 'admin') {
          return true;
        } else {
          this.router.navigate(['/auth/login']);
          alert('Login in as admin');
          return false;
        }
      })
    );
  }
}
