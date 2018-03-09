import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http'
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';

import { AuthService } from './auth/auth.service';
import { RestService } from './rest.service';
import { BooksComponent } from './books/books.component';
import { InputComponent } from './input/input.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [AppComponent, AuthComponent, HomeComponent, CallbackComponent, BooksComponent, InputComponent, ProfileComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [AuthService, RestService],
  bootstrap: [AppComponent]
})
export class AppModule {}
