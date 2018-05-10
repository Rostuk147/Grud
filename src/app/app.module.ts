import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModel, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { SystemModule } from './system/system.module';
import { MatCheckboxModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    AppRoutingModule,
    SystemModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
