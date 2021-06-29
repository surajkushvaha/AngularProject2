import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiPasswordService {
urlRigveda="https://passwordinator.herokuapp.com/generate";
  constructor(private _http:HttpClient) { }
  
  getInfo(length:number,number:boolean,charecter:boolean,caps:boolean){
    if (number==true&&charecter==true&&caps==true) {
        return this._http.get(this.urlRigveda+"?num=true"+"&char=true"+"&caps=true"+"&len="+length);

    }else if(number==true&&charecter==true){
      return this._http.get(this.urlRigveda+"?num=true"+"&char=true"+"&len="+length);

    }else if(number==true&&caps==true){
      return this._http.get(this.urlRigveda+"?num=true"+"&caps=true"+"&len="+length);

    }else if(charecter==true&&caps==true){
      return this._http.get(this.urlRigveda+"?char=true"+"&caps=true"+"&len="+length);

    }else if(charecter==true){
      return this._http.get(this.urlRigveda+"?char=true"+"&len="+length);

    }else if(number==true){
      return this._http.get(this.urlRigveda+"?num=true"+"&len="+length);

    }else if(caps==true){
      return this._http.get(this.urlRigveda+"?caps=true"+"&len="+length);

    }else{
      return this._http.get(this.urlRigveda+"?len="+length);
    }
  }
}
