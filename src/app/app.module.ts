import { CanSendGuardService } from './share/can-send-guard.service';
import { LineNotifyService } from './share/line-notify.service';
import { StickerService } from './share/sticker.service';
import { AppConfigService } from './share/app-config.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './page/login/login.component';
import { HeaderComponent } from './header/header.component';
import { SendMessageComponent } from './page/send-message/send-message.component';
import { SendWithStickerComponent } from './page/send-with-sticker/send-with-sticker.component';
import { LazyLoadImageModule } from "ng-lazyload-image";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    SendMessageComponent,
    SendWithStickerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    LazyLoadImageModule
  ],
  providers: [
    AppConfigService,
    StickerService,
    LineNotifyService,
    CanSendGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
