import { Component, OnInit } from '@angular/core';
import { ApiCovid19Service } from '../api-covid19.service';

@Component({
  selector: 'app-covid19',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.css']
})
export class Covid19Component implements OnInit {
country:string="Global";
  cases:any ={};
  vaccine:any={};
  constructor(private _apiCovid:ApiCovid19Service) { }

  ngOnInit(): void {
    console.log("I am calling");
          let ob=this._apiCovid.getDataCases(this.country);
          ob.subscribe((res:any)=>{
            this.cases=res.All;
          })
          let obj=this._apiCovid.getDataVaccine(this.country);
          obj.subscribe((res:any)=>{
            this.vaccine=res.All;
          })
  }
  selectedCountry(event:any){
    this.country=event.target.value;    
  }
  
  callApi(){
    console.log("I am calling");
          let ob=this._apiCovid.getDataCases(this.country);
          ob.subscribe((res:any)=>{
            this.cases=res.All;
          })
          let obj=this._apiCovid.getDataVaccine(this.country);
          obj.subscribe((res:any)=>{
            this.vaccine=res.All;
          })
  }

}
