import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import {DescriptionPostComponent} from "./system/description-post/description-post.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'system', loadChildren: './system/system.module#SystemModule'},
  {path: 'product/:id', component: DescriptionPostComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
   })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
