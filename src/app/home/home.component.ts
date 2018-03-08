import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(private rest: RestService) {

   }

  ngOnInit() {
    this.rest.getBooksList().subscribe(
      data => console.log(data),
      error => console.log(error),
      () => console.log('done')
    )
  }

}
