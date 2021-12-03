import { Component, OnInit } from '@angular/core';
import {ICellRendererAngularComp} from "ag-grid-angular";
import {ICellRendererParams} from "ag-grid-community";
import {message} from "ag-grid-community/dist/lib/utils/general";



@Component({
  selector: 'app-active-renderer',
  templateUrl: './active-renderer.component.html',
  styleUrls: ['./active-renderer.component.css']
})
export class ActiveRendererComponent implements ICellRendererAngularComp {
  public value: any;

  constructor() { }

  refresh(params: ICellRendererParams): boolean {
        throw new Error('Method not implemented.');
    }

  agInit(params: ICellRendererParams): void {

    if(params.value === 'I' || params.value === 'N') {
      this.value = params.value;
    }else {
      this.value = 'N';
    }

  }



/*

if(this.value === 'I') {
      this.value = 'I';
    }else if(this.value === 'N' && (params.value === 'N' || params.value === 'I')) {
      this.value = params.value;
    }else {
      this.value = this.value;
    }
 */



}
