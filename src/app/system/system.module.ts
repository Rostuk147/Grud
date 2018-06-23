import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemComponent } from './system.component';
import { SystemRoutingModule } from './system.routing.module';
import {SharedModule} from "../shared/shared.module";

import { DialogOverviewExampleDialogComponent } from './dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import { DialogDeleteComponent } from './dialog-delete/dialog-delete.component';
import { AddProductComponent } from './add-product/add-product.component';
import {DescriptionPostComponent} from "./description-post/description-post.component";
import { CatalogComponent } from './catalog/catalog.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



@NgModule({
  imports: [
    CommonModule,
    SystemRoutingModule,
    SharedModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    SystemComponent,
    DialogOverviewExampleDialogComponent,
    DialogDeleteComponent,
    AddProductComponent,
    DescriptionPostComponent,
    CatalogComponent
  ],
  entryComponents: [
    DialogOverviewExampleDialogComponent,
    DialogDeleteComponent
  ],
  providers: []
})
export class SystemModule { }
