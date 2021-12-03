import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ViewChild, LOCALE_ID, Inject } from '@angular/core';
import {formatDate} from "@angular/common";
import {ActiveRendererComponent} from "../active-renderer/active-renderer.component";
import {ActiveEditorComponent} from "../active-editor/active-editor.component";
import {EditableCallbackParams} from "ag-grid-community";


@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {

  public gridApi: any;
  public gridColumnApi:any;
  public columnDefs:any
  public rowData:any;

  public defaultColDef:any;
  public frameworkComponents:any;


  constructor(private http: HttpClient, @Inject(LOCALE_ID) private locale: string) {
      this.frameworkComponents  = {
        activeCellRenderer: ActiveRendererComponent,
        activeCellEditor: ActiveEditorComponent};


    this.columnDefs = [

      {headerName: "Megnevezes", field: "megnevezes", sortable: true, filter: true, editable: true},
      {headerName: "Ertek",field: "ertek", sortable: true, filter: true, editable: this.isErtekEditable,
        valueFormatter: ((params:any) => params.value.toFixed(2))},
      {headerName: "Ervenyesseg kezdete", field: "erv_kezdete", sortable: true, filter: true, editable: true,
        cellRenderer: ((data:any) => { return formatDate(data.value, 'yyyy.MM.d', this.locale);})},
      {headerName: "Ervenyesseg vege", field: "erv_vege", sortable: true, filter: true, editable: true ,
        cellRenderer: ((data:any) => { return formatDate(data.value, 'yyyy.MM.d', this.locale);}),
      },
      {headerName: "Aktiv", field: "aktiv", sortable: true, filter: true, editable: (this.isActiveEditable), cellRenderer: 'activeCellRenderer',cellEditor: 'agRichSelectCellEditor', cellEditorParams: {
          cellRenderer: 'activeCellRenderer',
          values: ['I', 'N'],
        },
      }




    ];


    this.rowData = [
      {megnevezes: 'C raktarepulet felujitasa', ertek: 3500000.459, erv_kezdete: '2021/10/19.', erv_vege: null , aktiv: 'N' },
      {megnevezes: 'IT infrastruktura korszerusitese', ertek: 500000.372, erv_kezdete: '2021.Jun.09.', erv_vege: '2022.Aug.30.,', aktiv: 'N' },
      {megnevezes: 'Human eroforrás bovítése 10%-kal', ertek: 257343.896, erv_kezdete: '2021-09-15.', erv_vege: '2021-11-23.', aktiv: 'I' },
      {megnevezes: 'Utvonal tervezo szoftver karbantartasa', ertek: 123295.63, erv_kezdete: '2021.01.17.', erv_vege: '2024.12.28.', aktiv: 'I' },
      {megnevezes: 'Koltsegcsokkento gyartasi terv kidolgozasa', ertek: 147972.71, erv_kezdete: '2021.05.11.', erv_vege: '2021.10.01.', aktiv: 'I' },
    ];


  }

   onGridReady(params:any) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  ngOnInit(): void {
  }


  title = "my-app";


  // Edit Active Column
  isActiveEditable = (params:any) => {
    const value = params.data[params.column.getColId()];
    if (value.includes('N')) {
      return true;
    } else {
      return false;
    }
  };

  isErtekEditable (params:EditableCallbackParams) :boolean {
    return params.data.erv_vege === null;
};


  // Edit Erv_Vege Column
  isErvVegeEditable (params: EditableCallbackParams): boolean {
    return params.data.erv_vege.getTime() > params.data.erv_kezdete.getTime();

  };



    isItNow(param:any) {
      if(param.value == Date.now() || param.value > Date.now()) {
          return true;
      }else {
        return false;
      }

    }




  dateFormatter(params:any) {
    let dateAsString = params.data.date;
    let dateParts = dateAsString.split('/');
    return `${dateParts[0]} . ${dateParts[1]} . ${dateParts[2]}`;
  }


  floatFormatter(params:number){
    let num = params.toFixed(2);
    return num;
  }

  dateComparator(date1:any, date2:any) {

    var date1Number = date1 && new Date(date1).getTime();
    var date2Number = date2 && new Date(date2).getTime();

    if (date1Number == null && date2Number == null) {
      return 0;
    }

    if (date1Number == null) {
      return -1;
    } else if (date2Number == null) {
      return 1;
    }

    return date1Number - date2Number;
  }

}
