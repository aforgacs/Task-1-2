import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContractListComponent} from "./components/contract-list/contract-list.component";
import {ContractFormComponent} from "./components/contract-form/contract-form.component";
import {AngContractListComponent} from "./components/ang-contract-list/ang-contract-list.component";
import {ContractEditFormComponent} from "./components/contract-edit-form/contract-edit-form.component";

const routes: Routes = [{path:'contracts', component: ContractListComponent},
  {path:'ag-contracts', component: AngContractListComponent},
  {path: 'contract-form', component: ContractFormComponent},
  {path: 'contract-edit-form', component: ContractEditFormComponent},
  {path: 'contract-edit-form/:id', component: ContractEditFormComponent},
  {path:'**', component: ContractListComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
