import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiQrcodeService {
urlQr="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=";
 xtra:any=""
  constructor(private _http:HttpClient) { }
  getQR(chs:string){
   this.xtra= this.urlQr+chs;   
   return  this.xtra;
  }
}
