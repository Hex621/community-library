import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/elements/sidebar/sidebar.component';
import { HeaderComponent } from './components/elements/header/header.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { MainComponent } from './components/pages/main/main.component';
import { BookComponent } from './components/pages/details/book/book.component';
import { UserComponent } from './components/pages/details/user/user.component';
import { AddBookComponent } from './components/pages/add/add-book/add-book.component';
import { TableComponent } from './components/elements/table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {RatingModule} from 'primeng/rating';
import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    RegisterComponent,
    MainComponent,
    BookComponent,
    UserComponent,
    AddBookComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    RatingModule,
    MenuModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
