import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCovid19Service {
urlCases="https://covid-api.mmediagroup.fr/v1/cases?country=";
  urlVaccine="https://covid-api.mmediagroup.fr/v1/vaccines?country=";
  constructor(private  _http:HttpClient) { }
  getDataCases(str:string){
    return this._http.get(this.urlCases+str);
  }
  getDataVaccine(vstr:string){
    return this._http.get(this.urlVaccine+vstr);
  }
  
}
