import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatSelectModule, MatButtonModule, MatIconModule } from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PostService } from '../service/post.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';


@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  declarations: [
     LoginComponent,
     RegistrationComponent,
     AuthComponent
  ],
  providers: [PostService, AuthService, AuthGuard]
})
export class AuthModule { }
