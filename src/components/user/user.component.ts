import { Component, computed, input, Input, signal } from '@angular/core';
import { DUMMY_USERS } from './data/users';


const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  
  
  get imagePath() {
    return '/users/' + this.avatar;
  }


  onSelectUser () {
    
  }
}
