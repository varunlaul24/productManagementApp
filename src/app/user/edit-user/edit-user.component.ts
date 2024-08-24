// import { Component, OnInit } from '@angular/core';
// import { FormGroup, NgForm } from '@angular/forms';
// import { ActivatedRoute } from '@angular/router';
// import { UserService } from '../user.service';

// interface User{
//   name: string;
//   role: string;
//   id: number;
//   email: string;
//   password: string;
//   avatar: string;
//   createdAt: string;
//   updatedAt: string;
// }

// @Component({
//   selector: 'app-edit-user',
//   templateUrl: './edit-user.component.html',
//   styleUrls: ['./edit-user.component.css']
// })
// export class EditUserComponent implements OnInit{
//   showForm:boolean=false;
//   userForm!: FormGroup
//   user!: User
//   userId!: number
//   editedUser!: User;

// constructor(private activatedRoute:ActivatedRoute, private userService:UserService){}

// ngOnInit(): void {
//   this.userId=this.activatedRoute.snapshot.params['id'];
//     this.userService.getUser(this.userId).subscribe((data)=>{
//       console.log(data)
//       this.user=data
//       this.editedUser={...data}
//     })
  
// }

// editUser(user:User,userForm:NgForm){
  
//   this.user=user;
//   this.userService.editUser(this.user.id, userForm.value).subscribe((response) => {
//     console.log(response);
//     this.user=this.editedUser
//   },
//   );
//   // this.router.navigate(['/header/user'])
// }

// }