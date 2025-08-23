import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../user.component/data/users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  public selectedUser = signal(DUMMY_USERS[randomIndex]);
  public imagePath = computed(() => '/users/' + this.selectedUser().avatar);
  // get imagePath() {
  //   return 'users/' + this.selectedUser.avatar;
  // }

  onClickButton() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
