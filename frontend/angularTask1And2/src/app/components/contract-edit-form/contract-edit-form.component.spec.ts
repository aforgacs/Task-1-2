import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractEditFormComponent } from './contract-edit-form.component';

describe('ContractEditFormComponent', () => {
  let component: ContractEditFormComponent;
  let fixture: ComponentFixture<ContractEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractEditFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
