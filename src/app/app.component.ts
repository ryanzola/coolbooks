import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../app/auth/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  isOpen: boolean;

  constructor(public auth: AuthService) {
    this.isOpen = true;
    this.auth.handleAuthentication();
  }

  close() {
    if (this.isOpen) {
      this.isOpen = false;
    }
  }

  toggleSide() {
    this.isOpen = !this.isOpen;
  }
}
