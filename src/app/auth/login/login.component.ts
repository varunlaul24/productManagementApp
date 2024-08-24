import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userDetails = {
    email: '',
    password: ''
  };
  loginFailed: boolean = false;
  errorMessage: string = '';
  
  constructor(private authService: AuthService) {}

  onLogin(form: NgForm) {
    if (form.valid) {
      const { email, password } = form.value;
      this.authService.login(email, password).subscribe({
        next: (response) => {
          console.log('Login successful', response);
        },
        error: (error) => {
          console.error('Login failed', error);
          this.loginFailed = true;
          this.errorMessage = 'Login failed. Please check your credentials and try again.';
        }
      });
    }
  }
}
