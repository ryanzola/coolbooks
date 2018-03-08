import { Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { CallbackComponent } from '../app/callback/callback.component';
import { HomeComponent } from '../app/home/home.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'books', component: BooksComponent},
  { path: 'callback', component: CallbackComponent },
  //{ path: '**', redirectTo: '' }
];
