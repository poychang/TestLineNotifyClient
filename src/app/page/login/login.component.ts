import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppConfigService } from './../../share/app-config.service';
import { LineNotifyService } from './../../share/line-notify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public token: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private config: AppConfigService,
    private line: LineNotifyService
  ) { }

  ngOnInit() {
    const token: string = this.activatedRoute.snapshot.queryParams['token'];
    this.config.saveToken(token);
    this.token = this.config.getToken();
  }


  public login() {
    this.line.login();
  }

}
