import { Component, OnInit } from '@angular/core';
import { ApiPasswordService } from '../api-password.service';
import { ApiQrcodeService } from '../api-qrcode.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  selectedItemsList:any = [];
  length:number=0;
  num:boolean=false;
  char:boolean=false;
  caps:boolean=false;
  regvedaData:string="";

   checkboxesDataList = [
    {
      id: 'num',
      label: 'Number',
      isChecked: false
    },
    {
      id: 'char',
      label: 'Charachter',
      isChecked: false
    },
    {
      id: 'caps',
      label: 'Capital',
      isChecked: false
    }
  ]
constructor(private _apiPasswordGenretor:ApiPasswordService) { }
    ngOnInit(): void {
    this.fetchSelectedItems()    
  }

  nggetdata(){
       this.selectedItemsList.forEach((element:any) => {
         if(element.id=='char'){
           this.char=true;
         }
         if(element.id=='num'){
           this.num=true;
         }
         if(element.id=='caps'){
           this.caps=true;
         }
       });
         
    let ob= this._apiPasswordGenretor.getInfo(this.length,this.num,this.char,this.caps)
    ob.subscribe((res:any)=>{
      this.regvedaData=res.data;
    });
    this.num=false;
    this.char=false;
    this.caps=false;    
  }
 

  changeSelection() {
    this.fetchSelectedItems()
  }

  fetchSelectedItems() {
    this.selectedItemsList = this.checkboxesDataList.filter((value, index) => {
      return value.isChecked
    });

  }
}
