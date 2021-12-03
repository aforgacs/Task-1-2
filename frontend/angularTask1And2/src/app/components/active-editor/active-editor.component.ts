import {AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
// @ts-ignore
import {AgEditorComponent} from "ag-grid-angular";
// @ts-ignore
import {ICellEditorParams, KeyCode} from "ag-grid-community";

@Component({
  selector: 'app-active-editor',
  templateUrl: './active-editor.component.html',
  styleUrls: ['./active-editor.component.css']
})
export class ActiveEditorComponent implements AgEditorComponent, AfterViewInit {

 params:any;
  value: any;

  @ViewChild('input', {read: ViewContainerRef}) public input: any;

  agInit(params: ICellEditorParams): void {
    this.params = params;

    this.value = this.getInitialValue(params);
  }

  getValue(): any {
    return this.value;
  }

  getInitialValue(params: ICellEditorParams): any {
    let startValue = params.value;

    const keyPressBackspaceOrDelete = params.keyPress === KeyCode.ENTER;
    if (params.charPress) {
      startValue = params.charPress;
    }

    if (startValue == 'I') {
      return startValue;
    }

    return '';
  }

  myCustomFunction() {
    return {
      rowIndex: this.params.rowIndex,
      colId: this.params.column.getId()
    };
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.input.element.nativeElement.focus();
    });
  }


}
