import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import {AuthIsLoggin} from "./auth.isLoggin";


@Injectable()
export class AuthIsLogginGuard implements CanActivate {
  constructor(private auth: AuthIsLoggin) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):any{
    if(  !this.auth.isLoggedIn ){
      return true;
    } else {
      return false;
    }
  }
}
