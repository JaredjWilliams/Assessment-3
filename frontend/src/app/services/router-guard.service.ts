import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateFn} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RouterGuardService {

  constructor() { }

  canActivate: CanActivateFn = (route: ActivatedRouteSnapshot, state : RouterStateSnapshot) => {
    return true;
  }
}
