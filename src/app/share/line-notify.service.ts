import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { AppConfigService } from './app-config.service';
import { Message } from './message.interface';

@Injectable()
export class LineNotifyService {

  constructor(
    private http: Http,
    private config: AppConfigService
  ) { }

  /** 設定與 Lind Notify 連動 */
  public login() {
    window.location.assign(`${this.config.api}/Authorize`);
  }

  /** 傳送文字訊息 */
  public sendMessage = (message: string) => {
    let m = <Message>{
      token: this.config.getToken(),
      message: message
    };
    return this.http.post(`${this.config.api}/LineNotify/SendMessage`, m);
  }

  /** 傳送官方貼圖 */
  public sendWithSticker = (message: string, stickerPackageId: string, stickerId: string) => {
    let m = <Message>{
      token: this.config.getToken(),
      message: message,
      stickerPackageId: stickerPackageId,
      stickerId: stickerId
    };
    return this.http.post(`${this.config.api}/LineNotify/SendWithSticker`, m);
  }
}
