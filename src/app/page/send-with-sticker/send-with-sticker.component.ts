import { Sticker } from './../../share/sticker.model';
import { LineNotifyService } from './../../share/line-notify.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { StickerService } from './../../share/sticker.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-with-sticker',
  templateUrl: './send-with-sticker.component.html',
  styleUrls: ['./send-with-sticker.component.css']
})
export class SendWithStickerComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private stickerService: StickerService,
    private line: LineNotifyService
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.stickerService.getStickers()
      .subscribe((result) => { this.stickerList = result });
  }
  public form: FormGroup;
  private createForm() {
    this.form = this.formBuilder.group({
      message: new FormControl('', [Validators.required]),
      stickerPackageId: new FormControl('', [Validators.required]),
      stickerId: new FormControl('', [Validators.required])
    });
  }

  public defaultImage: string = 'http://placehold.it/100x100';
  public stickerList: Sticker[];
  public selectedSticker: Sticker = new Sticker();
  public getStickerImage = (item: Sticker) => { return this.stickerService.getStickerImage(item) };
  public selectSticker = (item: Sticker) => {
    this.defaultImage = this.getStickerImage(item);
    this.selectedSticker = item;
    this.form.controls['stickerPackageId'].setValue(item.stkpkgid);
    this.form.controls['stickerId'].setValue(item.stkid);
  };
  public sendMessage() {
    this.line.sendWithSticker(this.form.controls['message'].value, this.form.controls['stickerPackageId'].value, this.form.controls['stickerId'].value)
      .subscribe(result => { console.log(result) });
  };

}
