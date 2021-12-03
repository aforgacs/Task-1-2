import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngContractListComponent } from './ang-contract-list.component';

describe('AngContractListComponent', () => {
  let component: AngContractListComponent;
  let fixture: ComponentFixture<AngContractListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngContractListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngContractListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
