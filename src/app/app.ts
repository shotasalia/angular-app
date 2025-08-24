import { Component, signal } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { DUMMY_USERS } from '../components/user/data/users';
import { UserComponent } from '../components/user/user.component';
import { Task } from '../components/task/task';


@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, Task],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  public users = DUMMY_USERS;
  selectedUserId = "u1";

  getSelectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }
  onSelectUser (userId: string) {
    this.selectedUserId = userId;
  }
} 
