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
import { MatInputModule, MatSelectModule, MatButtonModule, MatIconModule, MatDialogModule } from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {NotfoundComponent} from "./notfound/notfound.component";



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
    MatDialogModule
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
    SearchPipe
  ],
  providers: [
    PostService
  ]
})
export class SharedModule { }
