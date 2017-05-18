import { Injectable } from '@angular/core';

@Injectable()
export class AppConfigService {

  constructor() { }

  /** 儲存 Line Notify 的 Token */
  public saveToken = (token: string) => {
    if (token == undefined || null) return;
    window.localStorage.setItem('token', token);
  }
  /** 取得 Line Notify 的 Token */
  public getToken = () => { return window.localStorage.getItem('token'); }
}
