import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './page/login/login.component';
import { SendMessageComponent } from './page/send-message/send-message.component';
import { SendWithStickerComponent } from './page/send-with-sticker/send-with-sticker.component';
import { LazyLoadImageModule } from "ng-lazyload-image";

import { AppConfigService } from './share/app-config.service';
import { StickerService } from './share/sticker.service';
import { LineNotifyService } from './share/line-notify.service';
import { CanSendGuardService } from './share/can-send-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
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
