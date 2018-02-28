import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import * as Auth0Lock from 'auth0-lock'

@Component({
  selector: 'app-auth',
  template: `
  <button
  class="login"
  *ngIf="!auth.isAuthenticated()"
  (click)="auth.login()">
    Log In
  </button>

  <button
    class="logout"
    *ngIf="auth.isAuthenticated()"
    (click)="auth.logout()">
      Log Out
  </button>
  `,
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }
}
