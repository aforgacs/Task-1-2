import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


const BASE_URL = 'http://localhost:8080/api/contracts';


@Injectable({
  providedIn: 'root'
})
export class ContractServiceService {

  constructor(private http:HttpClient) { }


  createContract(contractCreation:CreateContractCommandModel) {
    return this.http.post(BASE_URL, contractCreation)
  }

  getContracts(): Observable<Array<ContractListItemModel>> {
    return this.http.get<Array<ContractListItemModel>>(BASE_URL);
  }

  updateContract(contract: CreateContractCommandModel, contractId: number): Observable<any> {
    return this.http.put(BASE_URL + '/' + contractId, contract);
  }

}
