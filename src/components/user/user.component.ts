import { Component, computed, EventEmitter, input, Input, Output, signal } from '@angular/core';
import { DUMMY_USERS } from './data/users';
import { User } from './interface/user.interface';


const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({ required: true }) user !: User
  @Output() select = new EventEmitter<string>();
  
  
  get imagePath() {
    return '/users/' + this.user.avatar;
  }


  onSelectUser () {
    this.select.emit(this.user.id);
  }
}
