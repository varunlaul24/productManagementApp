import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})

export class NewUserComponent implements OnInit{
  newUserForm!:FormGroup
  constructor(private authService: AuthService, private router: Router){}
  
  ngOnInit(): void {
    this.newUserForm=new FormGroup({
      name:new FormControl('',Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(4)]),
      avataar:new FormControl('https://i.imgur.com/LDOO4Qs.jpg',Validators.required)
    })
  }

  creatingNew(){
    if (this.newUserForm.valid) {
      const name = this.newUserForm.get('name')?.value;
     const email = this.newUserForm.get('email')?.value;
     const password = this.newUserForm.get('password')?.value;
     const avataar = this.newUserForm.get('avataar')?.value;
     this.authService.register(name,email, password,avataar).subscribe((response: any) => {
       if (response) {
        console.log(response)
         console.log('User registered successfully!');
        this.router.navigate(['admin/list']);
       } 
     });
   }
  }
}