import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemComponent } from './system.component';
import { MatToolbarModule, MatInputModule, MatButtonModule, MatDialogModule, MatSelectModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from '../search.pipe';
import { PostService } from '../service/post.service';
import { SystemRoutingModule } from './system-routing.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { DialogOverviewExampleDialogComponent } from './dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { DialogDeleteComponent } from './dialog-delete/dialog-delete.component';


@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
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
    ToolbarComponent,
    DialogOverviewExampleDialogComponent,
    SearchPipe,
    DialogDeleteComponent
  ],
  entryComponents: [
    ToolbarComponent,
    DialogOverviewExampleDialogComponent,
    DialogDeleteComponent
  ],
  providers: [PostService]
})
export class SystemModule { }
