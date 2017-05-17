import { LineNotifyService } from './../../share/line-notify.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private line: LineNotifyService
  ) {
    this.createForm();
   }

  ngOnInit() {
  }

  public form: FormGroup;
  private createForm() {
    this.form = this.formBuilder.group({
      message: new FormControl('', [Validators.required])
    });
  }
  public sendMessage() {
    this.line.sendMessage(this.form.controls['message'].value)
      .subscribe(result => { console.log(result) });
  }
}
