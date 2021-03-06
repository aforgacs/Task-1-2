import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {ContractServiceService} from "../../services/contract-service.service";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {handleValidationErrors} from "../utils/validation.handler";
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-contract-form',
  templateUrl: './contract-form.component.html',
  styleUrls: ['./contract-form.component.css'],
  providers: [DatePipe]
})
export class ContractFormComponent implements OnInit {

  contractForm: FormGroup;
  contractId: any;

  constructor(private contractService: ContractServiceService, private http: HttpClient,
              private formbuilder: FormBuilder,
              private router: Router, private route: ActivatedRoute, private datePipe: DatePipe) {
    this.contractForm = this.formbuilder.group({
      megnevezes: [ null,[Validators.required]],
      ertek: [null, [Validators.required]],
      erv_kezdete:[null,[Validators.required]],
      erv_vege: [null],
      aktiv:[null,[Validators.required]]
    } );


  }

   //dateMod = this.datePipe.transform(this.contractForm.get('erv_kezdete').value, 'yyyy.MM.dd');
  //dateModKetto = this.datePipe.transform(this.contractForm.get('erv_vege').value, 'yyyy.MM.dd');







  ngOnInit() {


    this.route.paramMap.subscribe(
      paramMap => {
        const editableContractId = paramMap.get('id');
        if (editableContractId) {
          this.contractId = +editableContractId;
          this.getContractDetails(editableContractId);
        }
      },
      error => console.warn(error),
    );
  }


  private getContractDetails(contractId: string) {
    this.contractService.fetchContractDetails(contractId).subscribe(
      (data: CreateContractCommandModel) => {
        this.contractForm.patchValue(data);
      },
    );
  }



  onSubmit() {
    if((this.contractForm.value.erv_vege === null || this.contractForm.value.erv_kezdete < this.contractForm.value.erv_vege)
    && this.contractForm.value.erv_kezdete != null && this.contractForm.value.megnevezes != null &&
      this.contractForm.value.ertek != null && this.contractForm.value.aktiv != null) {

      this.contractForm.value.erv_kezdete = this.datePipe.transform(this.contractForm.value.erv_kezdete, 'yyyy.MM.dd')
      this.contractForm.value.erv_vege = this.datePipe.transform(this.contractForm.value.erv_vege, 'yyyy.MM.dd')

      this.contractId ? this.updateContract() : this.createContract();

    }


  }


  createContract() {
    this.contractService.createContract(this.contractForm.value).subscribe(
      () => {
        this.contractForm.reset();
        this.router.navigate(["contract-form"])
      },
      error => {
        console.warn(error);
      }
    );
  }

  updateContract() {
    this.contractService.updateContract(this.contractForm.value, this.contractId).subscribe(
      () => this.contractForm.reset(),
      error => handleValidationErrors(error, this.contractForm),
      () => this.router.navigate(['ag-contracts']),
    );
  }

}
