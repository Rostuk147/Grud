import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemComponent } from './system.component';
import { SystemRoutingModule } from './system.routing.module';
import {SharedModule} from "../shared/shared.module";

import { DialogOverviewExampleDialogComponent } from './dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import { DialogDeleteComponent } from './dialog-delete/dialog-delete.component';
import {NgxPaginationModule} from 'ngx-pagination';



@NgModule({
  imports: [
    CommonModule,
    SystemRoutingModule,
    NgxPaginationModule,
    SharedModule
  ],
  declarations: [
    SystemComponent,
    DialogOverviewExampleDialogComponent,
    DialogDeleteComponent,

  ],
  entryComponents: [
    DialogOverviewExampleDialogComponent,
    DialogDeleteComponent
  ],
  providers: []
})
export class SystemModule { }
