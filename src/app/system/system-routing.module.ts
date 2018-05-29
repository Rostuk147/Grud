import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SystemComponent } from './system.component';
import { AuthGuard } from '../auth/auth-guard.service';

const routes: Routes = [
  // {path: '', component: SystemComponent, canActivate:[AuthGuard]}
  {path: '', component: SystemComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
