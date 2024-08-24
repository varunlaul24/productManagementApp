import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getAllUsers().subscribe((data) => (this.users = data));
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id.toString()).subscribe(() => {
      this.users = this.users.filter((user) => user.id !== id);
    });
  }
}