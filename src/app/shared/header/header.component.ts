import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  userRole: 'admin' | 'customer' | null = null;
  username: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.fetchUserRole().subscribe(() => {
      this.userRole = this.authService.getUserRole();
      this.username = this.authService.getUsername();
    });
  }

  onLogout(): void {
    this.authService.logout();
  }
}
