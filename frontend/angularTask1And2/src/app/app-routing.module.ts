import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContractListComponent} from "./components/contract-list/contract-list.component";
import {ContractFormComponent} from "./components/contract-form/contract-form.component";

const routes: Routes = [{path:'contracts', component: ContractListComponent},
  {path: 'contract-form', component: ContractFormComponent},
  {path:'**', component: ContractListComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
