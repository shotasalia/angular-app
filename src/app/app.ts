import { Component, signal } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { UserComponent } from '../components/user/user.component/user.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('-projangularect');


  
}
