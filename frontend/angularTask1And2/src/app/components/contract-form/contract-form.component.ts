import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {ContractServiceService} from "../../services/contract-service.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-contract-form',
  templateUrl: './contract-form.component.html',
  styleUrls: ['./contract-form.component.css']
})
export class ContractFormComponent implements OnInit {

  contractForm: FormGroup;


  constructor(private contractService: ContractServiceService, private http: HttpClient,
              private formbuilder: FormBuilder,
              private router: Router) {
    this.contractForm = this.formbuilder.group({
      megnevezes: [ '',[Validators.required]],
      ertek: [ [Validators.required]],
      erv_kezdete:['',[Validators.required]],
      erv_vege: [''],
      aktiv:['',[Validators.required]]
    }, { validators: this.dateCompareValidator });
  }



   dateCompareValidator: ValidatorFn = (compare: AbstractControl):
    ValidationErrors | null => {
    const erv_kezdete = compare.get('erv_kezdete');
    const erv_vege = compare.get('erv_vege');

    return erv_kezdete && erv_vege && erv_kezdete.value <= erv_vege.value ? { identityRevealed: true } : null;
  };




  ngOnInit() {

  }

  onSubmit() {
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

}
