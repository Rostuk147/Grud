import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth.routing.module';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthComponent } from './auth.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ],
  declarations: [
    LoginComponent,
    RegistrationComponent,
    AuthComponent
  ],
  providers: [ AuthGuard, AuthService]
})
export class AuthModule { }
