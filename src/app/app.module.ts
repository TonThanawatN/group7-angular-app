import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { BooksComponent } from './components/books/books.component';
import { BasketComponent } from './components/basket/basket.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule , routingComponents } from './AppRoutingModule';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    BooksComponent,
    BasketComponent,
    HomepageComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
