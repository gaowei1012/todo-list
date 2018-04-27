import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { Code404Component } from './code404/code404.component';
import { HttpDataComponent } from './http-data/http-data.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    LoginComponent,
    HomeComponent,
    Code404Component,
    HttpDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
