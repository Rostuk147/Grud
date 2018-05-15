import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private auth: AuthService) {}
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
      ):any{
         if(  this.auth.isLoggedIn ){
             return true;
         } else {
             return false;
         }
      }
}