import { Component, OnInit } from '@angular/core';
import { ApiQrcodeService } from '../api-qrcode.service';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css']
})
export class QrcodeComponent implements OnInit {
data:string="QR code genreater by Suraj Kushvaha + https://github.com/surajkushvaha";
  constructor(private _api:ApiQrcodeService) { }
  fromForm:string="";
  srouce:string="";
  ngOnInit(): void {
    let ob=this._api.getQR(this.data)
    this.srouce=ob;
    
  }
  getdata(Data:string){
    this.data="";
    this.data=Data;
    this.ngOnInit();

  }
}
