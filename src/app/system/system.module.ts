import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemComponent } from './system.component';
import { MatToolbarModule, MatInputModule, MatButtonModule, MatDialogModule, MatSelectModule, MatPaginatorModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from '../search.pipe';
import { DialogOverviewExampleDialogComponent } from '../dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import { PostService } from '../service/post.service';
import { SystemRoutingModule } from './system-routing.module';
import { PaginationComponent } from './pagination/pagination.component';
import { ToolbarComponent } from './toolbar/toolbar.component';


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
    MatPaginatorModule
  ],
  declarations: [
    SystemComponent,
    ToolbarComponent,
    DialogOverviewExampleDialogComponent,
    SearchPipe,
    PaginationComponent
  ],
  entryComponents: [
    ToolbarComponent,
    DialogOverviewExampleDialogComponent
  ],
  providers: [PostService]
})
export class SystemModule { }
