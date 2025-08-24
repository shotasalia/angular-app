import { Component, signal } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { DUMMY_USERS } from '../components/user/data/users';
import { UserComponent } from '../components/user/user.component';


@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  public users = DUMMY_USERS;

  
}
