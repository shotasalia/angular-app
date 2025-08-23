import { Component, signal } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { UserComponent } from '../components/user/user.component/user.component';
import { DUMMY_USERS } from '../components/user/user.component/data/users';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  public users = DUMMY_USERS;

  
}
