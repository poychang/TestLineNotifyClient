import { AppConfigService } from './app-config.service';
import { RouterStateSnapshot, ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class CanSendGuardService implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.config.getToken() != undefined || null) {
      console.log('Please~');
      return true;
    }
    console.log('Guard!!');
    return false;
  }

  constructor(
    private config: AppConfigService
  ) { }

}
