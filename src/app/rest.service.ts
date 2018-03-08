import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../environments/environment';
import 'rxjs/add/operator/map';

import { AuthService } from './auth/auth.service';

@Injectable()
export class RestService {
  private base_url = environment.apiUrl;

  constructor(private http: Http, private auth: AuthService) {
    this.getBooksList();
    this.getBook();
  }

  getBooksList(): any {
    if (this.auth.isAuthenticated()) {
      const route = this.base_url + '/products';
      return this.http.get(route).map((res: Response) => res.json());
    } else {
      console.log('please log in');
      return {};
    }
  }

  getBook() {}
}
