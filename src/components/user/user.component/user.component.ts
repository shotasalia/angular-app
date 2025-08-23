import { Component, computed, Input, signal } from '@angular/core';
import { DUMMY_USERS } from '../user.component/data/users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() avatar!: string;
  @Input() name!: string;
  
  
  get imagePath() {
    return '/users/' + this.avatar;
  }


  onSelectUser () {
    
  }
}
