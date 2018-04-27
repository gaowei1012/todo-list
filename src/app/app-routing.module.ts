import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './guard/login.guard';
import { TodoComponent } from './todo/todo.component';
import { Code404Component } from './code404/code404.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login', component: LoginComponent,
    canActivate: [LoginGuard]
  },
  { path: 'todo', component: TodoComponent },
  { path: '**', component: Code404Component }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: [],
  providers: [LoginGuard]
})
export class AppRoutingModule { }
