import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ContractServiceService} from "../../services/contract-service.service";

@Component({
  selector: 'app-ang-contract-list',
  templateUrl: './ang-contract-list.component.html',
  styleUrls: ['./ang-contract-list.component.css']
})
export class AngContractListComponent implements OnInit {

  contracts: ContractListItemModel[] = [];

  constructor(private service: ContractServiceService, private router: Router) {
  }

  ngOnInit(): void {
    this.fetchContracts();
  }


  fetchContracts() {
    this.service.getContracts().subscribe((categoryList: ContractListItemModel[]) => {
      this.contracts = categoryList;
    });
  };

  editContract(contractId: number): void {
    this.router.navigate(['/contract-edit-form', contractId]);
  }



}
