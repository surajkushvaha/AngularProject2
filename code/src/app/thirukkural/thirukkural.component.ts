import { Component, OnInit } from '@angular/core';
import { ApiThirukkuralService } from '../api-thirukkural.service';
import { ThirukkuralClass } from '../thirukkural-class';

@Component({
  selector: 'app-thirukkural',
  templateUrl: './thirukkural.component.html',
  styleUrls: ['./thirukkural.component.css']
})
export class ThirukkuralComponent implements OnInit {
 id:number=1;

  thirukkuralData:any={};
  detailthirukkural: ThirukkuralClass=new ThirukkuralClass;
  constructor(private _apithiru:ApiThirukkuralService) { }

  ngOnInit(): void {
     let ob= this._apithiru.getInfobyNumber(this.id);
     
    ob.subscribe((res:any)=>{
      this.thirukkuralData=res;       
    });
  }
  setId(ID:number){
   this.id=ID;
   this.ngOnInit();
  
 }
}
