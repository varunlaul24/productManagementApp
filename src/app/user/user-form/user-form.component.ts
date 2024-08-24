import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  UserForm!: FormGroup;
  userId!: number;
  isEditMode: boolean = false;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initializeForm();

    this.route.params.subscribe((params) => {
      this.userId = +params['id'];
      if (this.userId) {
        this.isEditMode = true;
        this.loadUser();
      }
    });
  }

  initializeForm() {
    this.UserForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      avatar: new FormControl(
        'https://i.imgur.com/LDOO4Qs.jpg',
        Validators.required
      ),
    });
  }

  loadUser() {
    this.userService.getUser(this.userId.toString()).subscribe((user) => {
      this.UserForm.patchValue({
        name: user.name,
        email: user.email,
        password: '', 
        avatar: user.avatar,
      });
    });
  }

  onSubmit() {
    if (this.UserForm.valid) {
      const userFormData = this.UserForm.value;
      if (this.isEditMode) {
        this.userService.editUser(this.userId, userFormData).subscribe(() => {
          console.log('User updated successfully!');
          this.router.navigate(['/admin/list']);
        });
      } else {
        const { name, email, password, avatar } = userFormData;
        this.authService
          .register(name, email, password, avatar)
          .subscribe((response: any) => {
            console.log('User registered successfully!');
            this.router.navigate(['/admin/list']);
          });
      }
    }
  }
}