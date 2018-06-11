import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemComponent } from './system.component';
import { MatInputModule, MatButtonModule, MatDialogModule, MatSelectModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostService } from '../shared/service/post.service';
import { SystemRoutingModule } from './system.routing.module';
import { DialogOverviewExampleDialogComponent } from './dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { DialogDeleteComponent } from './dialog-delete/dialog-delete.component';
import {SearchPipe} from "../shared/pipes/search.pipe";


@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSelectModule,
    SystemRoutingModule,
    NgxPaginationModule
  ],
  declarations: [
    SystemComponent,
    DialogOverviewExampleDialogComponent,
    SearchPipe,
    DialogDeleteComponent,

  ],
  entryComponents: [
    DialogOverviewExampleDialogComponent,
    DialogDeleteComponent
  ],
  providers: [PostService]
})
export class SystemModule { }
