import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {PostService} from "./service/post.service";
import {SearchPipe} from "../shared/pipes/search.pipe";

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule, MatSelectModule, MatButtonModule, MatIconModule, MatDialogModule} from '@angular/material';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {NotfoundComponent} from "./notfound/notfound.component";
import {AuthService} from "./service/auth.service";
import {AuthIsLoggin} from "../auth/auth.isLoggin";
import {AuthGuard} from "../auth/auth-guard.service";
import {AuthIsLogginGuard} from "../auth/auth.isLoggin.guard";


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SearchPipe,
    NotfoundComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatDialogModule,
    MatSnackBarModule,
    SearchPipe
  ],
  providers: [
    PostService,
    AuthService,
    AuthIsLoggin,
    AuthGuard,
    AuthIsLogginGuard
  ]
})
export class SharedModule { }
