import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModel, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app.routing.module';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import {DescriptionPostComponent} from "./system/description-post/description-post.component";



@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    DescriptionPostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    HomeModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
