import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateFn, Router} from "@angular/router";
import {LoginService} from "./login/login.service";

@Injectable({
  providedIn: 'root'
})
export class RouterGuardService {

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  canActivate: CanActivateFn = (route: ActivatedRouteSnapshot, state : RouterStateSnapshot) => {
    if (!this.loginService.isUserLoggedIn()) {
      this.router.navigate(['/login']);
      return false;
    }


    return true;
  }
}
