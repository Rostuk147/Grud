import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { SystemModule } from './system/system.module';
import { AuthGuard } from './auth/auth-guard.service';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path: '', component: AuthComponent},
  {path: 'system', loadChildren: './system/system.module#SystemModule'},
  {path: '**', component: NotfoundComponent}
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
