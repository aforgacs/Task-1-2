import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {ContractServiceService} from "../../services/contract-service.service";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {DatePipe} from "@angular/common";
import {handleValidationErrors} from "../utils/validation.handler";

@Component({
  selector: 'app-contract-edit-form',
  templateUrl: './contract-edit-form.component.html',
  styleUrls: ['./contract-edit-form.component.css'],
  providers: [DatePipe]
})
export class ContractEditFormComponent implements OnInit {

  contractForm: FormGroup;
  contractId: any;

  constructor(private contractService: ContractServiceService, private http: HttpClient,
              private formbuilder: FormBuilder,
              private router: Router, private route: ActivatedRoute, private datePipe: DatePipe) {
    this.contractForm = this.formbuilder.group({
      megnevezes: [ '',[Validators.required]],
      ertek: [ [Validators.required]],
      erv_kezdete:['',[Validators.required]],
      erv_vege: [''],
      aktiv:['',[Validators.required]]
    }, );


  }

  /*dateCompareValidator: ValidatorFn = (compare: AbstractControl):
    ValidationErrors | null => {
    const erv_kezdete = compare.get('erv_kezdete');
    const erv_vege = compare.get('erv_vege');

    return erv_kezdete && erv_vege && erv_kezdete.value <= erv_vege.value ? { identityRevealed: true } : null;
  };*/




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
    if(this.contractForm.value.erv_kezdete < this.contractForm.value.erv_vege) {

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
