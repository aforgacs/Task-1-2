import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ContractListComponent} from "./components/contract-list/contract-list.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {ActiveRendererComponent} from "./components/active-renderer/active-renderer.component";
import {ActiveEditorComponent} from "./components/active-editor/active-editor.component";
import {ContractFormComponent} from "./components/contract-form/contract-form.component";
import {AngContractListComponent} from "./components/ang-contract-list/ang-contract-list.component";
// @ts-ignore
import { AgGridModule } from 'ag-grid-angular';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ContractEditFormComponent } from './components/contract-edit-form/contract-edit-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ContractListComponent,
    NavbarComponent,
    ActiveRendererComponent,
    ActiveEditorComponent,
    ContractFormComponent,
    AngContractListComponent,
    ContractEditFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgGridModule.withComponents([ActiveRendererComponent, ActiveEditorComponent]),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
