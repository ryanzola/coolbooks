import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../app/auth/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  avatar: string
  isOpen: boolean;

  constructor(public auth: AuthService) {
    this.isOpen = true;
    this.auth.handleAuthentication();
    this.auth.isAuthenticated();
    this.avatar = localStorage.getItem('avatar');
  }

  // listener to close the drawer on click anywhere on the page. commented out bc annoying.
  close() {
    if (this.isOpen) {
      this.isOpen = false;
    }
  }

  toggleSide() {
    this.isOpen = !this.isOpen;
  }
}
