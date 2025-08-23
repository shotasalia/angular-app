import { Component, computed, input, Input, signal } from '@angular/core';
import { DUMMY_USERS } from '../user.component/data/users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  avatar = input.required<string>();
  name = input.required<string>();
  
  imagePath = computed(() => '/users/' + this.avatar()); 

  onSelectUser () {
    
  }
}
