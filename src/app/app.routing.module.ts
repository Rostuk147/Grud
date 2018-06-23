import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import {AuthGuard} from "./auth/auth-guard.service";
import {AuthIsLogginGuard} from "./auth/auth.isLoggin.guard";
import {AuthComponent} from "./auth/auth.component";


const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'auth', canActivate: [AuthIsLogginGuard], component: AuthComponent},
  {path: 'system', canActivate: [AuthGuard],  loadChildren: './system/system.module#SystemModule'},
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
