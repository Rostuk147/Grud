import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SystemComponent } from './system.component';
import {DescriptionPostComponent} from "./description-post/description-post.component";
import {CatalogComponent} from "./catalog/catalog.component";
import {AddProductComponent} from "./add-product/add-product.component";


const routes: Routes = [
  {path: '', component: SystemComponent, children:[
      {path: 'catalog', component: CatalogComponent},
      {path: 'catalog/product/:id', component: DescriptionPostComponent},
      {path: 'catalog/add', component: AddProductComponent}
    ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
