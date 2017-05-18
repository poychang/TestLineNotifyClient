import { CanSendGuard } from './share/can-send.guard';
import { SendWithStickerComponent } from './page/send-with-sticker/send-with-sticker.component';
import { SendMessageComponent } from './page/send-message/send-message.component';
import { LoginComponent } from './page/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'sendMessage',
    component: SendMessageComponent,
    canActivate: [CanSendGuard]
  },
  {
    path: 'sendWithSticker',
    component: SendWithStickerComponent,
    canActivate: [CanSendGuard]
  },
  {
    path: '**',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
