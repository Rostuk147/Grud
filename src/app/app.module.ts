import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './service/post.service';
import { NgModel, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import { DialogOverviewExampleDialogComponent } from './dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import { SearchPipe } from './search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    DialogOverviewExampleDialogComponent,
    SearchPipe,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSelectModule
  ],
  entryComponents: [
    DialogOverviewExampleDialogComponent
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
