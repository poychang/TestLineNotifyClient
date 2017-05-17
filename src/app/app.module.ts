import { LineNotifyService } from './share/line-notify.service';
import { StickerService } from './share/sticker.service';
import { AppConfigService } from './share/app-config.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './page/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    AppConfigService,
    StickerService,
    LineNotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
