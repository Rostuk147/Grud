import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthComponent } from './auth.component';
import {AuthIsLogginGuard} from "./auth.isLoggin.guard";

const routes: Routes = [
    {
        path: 'auth', canActivate: [AuthIsLogginGuard], component: AuthComponent, children: [
            {path: 'login', component: LoginComponent},
            {path: 'registration' ,component: RegistrationComponent}
        ]
    }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
