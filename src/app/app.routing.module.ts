import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { SystemComponent } from './system/system.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'system', component: SystemComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
