import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import {DescriptionPostComponent} from "./system/description-post/description-post.component";
import {AuthGuard} from "./auth/auth-guard.service";
import {AuthIsLogginGuard} from "./auth/auth.isLoggin.guard";


const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'auth', canActivate: [AuthIsLogginGuard], component: AuthComponent},
  {path: 'system', canActivate: [AuthGuard],  loadChildren: './system/system.module#SystemModule'},
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
