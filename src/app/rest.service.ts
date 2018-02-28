import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable()
export class RestService {
  private base_url = environment.apiUrl;

  constructor() { }

  getBooks() {
    console.log(this.base_url);
  }

}
