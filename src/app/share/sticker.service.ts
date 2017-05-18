import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'

import { AppConfigService } from './app-config.service';
import { Sticker } from './sticker.model';

@Injectable()
export class StickerService {

  constructor(
    private http: Http,
    private config: AppConfigService
  ) { }

  /** 取得貼圖清單 */
  public getStickers(): Observable<Sticker[]> {
    return this.http.get(`${this.config.api}/Stickers`)
      .map((response) => { return response.json() as Sticker[] });
  };
  /** 取得指定貼圖資源路徑 */
  public getStickerImage = (sticker: Sticker): string => {
    return `${this.config.api}/Stickers/${sticker.stkpkgid}/${sticker.stkid}`;
  }
}
