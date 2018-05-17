import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { SystemModule } from './system/system.module';
import { AuthGuard } from './auth/auth-guard.service';

const routes: Routes = [
  {path: '', component: AuthComponent},
  {path: 'system', canActivate:[AuthGuard], loadChildren: './system/system.module#SystemModule'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
