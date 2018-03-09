import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private rest: RestService, private auth: AuthService) {}

  ngOnInit() {}
}
