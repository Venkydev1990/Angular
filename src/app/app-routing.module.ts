import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [

  {
    path: "login", component: LoginComponent
  },
  {
    path: "register", component: SignupComponent
  },
  {
    path: "registerdUsers", component: UsersComponent
  }, {
    path: "", redirectTo: "login", pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
