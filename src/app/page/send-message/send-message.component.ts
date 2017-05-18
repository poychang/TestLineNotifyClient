import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { LineNotifyService } from './../../share/line-notify.service';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private line: LineNotifyService
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

  private createForm() {
    this.form = this.formBuilder.group({
      message: new FormControl('', [Validators.required])
    });
  }
  public sendMessage() {
    this.line.sendMessage(this.form.controls['message'].value)
      .subscribe(result => { console.log(result); });
  }
}
