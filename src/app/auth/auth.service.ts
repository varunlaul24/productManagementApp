import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://api.escuelajs.co/api/v1/auth/login';
  private profileUrl = 'https://api.escuelajs.co/api/v1/auth/profile';
  private registerUrl = 'https://api.escuelajs.co/api/v1/users';

  private userRole: 'admin' | 'customer' | null = null;
  private username: string | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { email, password }).pipe(
      tap((response) => {
        localStorage.setItem('token', response.access_token);
      }),
      switchMap(() => this.fetchUserRole()),
      tap(() => {
        const userRole = this.getUserRole();
        if (userRole === 'admin') {
          this.router.navigate(['/admin/list']);
        } else {
          this.router.navigate(['/products/list']);
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.userRole = null;
    this.username = null;
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  register(
    name: string,
    email: string,
    password: string,
    avatar: string
  ): Observable<any> {
    return this.http.post(this.registerUrl, { name, email, password, avatar });
  }

  fetchUserRole(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this.http.get(this.profileUrl, { headers }).pipe(
      tap((profile: any) => {
        this.userRole = profile.role;
        this.username = profile.name;
      })
    );
  }

  getUserRole(): 'admin' | 'customer' | null {
    return this.userRole;
  }

  getUsername(): string | null {
    return this.username;
  }
}