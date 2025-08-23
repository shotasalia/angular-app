import { Component } from '@angular/core';
import { DUMMY_USERS } from '../user.component/data/users';
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  public selectedUser = DUMMY_USERS[3];

  get imagePath() {
    return 'users/' + this.selectedUser.avatar;
  }
}
