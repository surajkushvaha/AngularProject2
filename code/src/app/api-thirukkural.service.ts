import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiThirukkuralService {
urlThk="https://api-thirukkural.vercel.app/api?num=";

  constructor(private _http:HttpClient) { }
  getInfobyNumber(id:number){
    return this._http.get(this.urlThk+id+"");

  }
}
