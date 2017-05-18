import { Injectable } from '@angular/core';
import { RouterStateSnapshot, ActivatedRouteSnapshot, CanActivate } from '@angular/router';

import { AppConfigService } from './app-config.service';

@Injectable()
export class CanSendGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.config.getToken()) {
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
