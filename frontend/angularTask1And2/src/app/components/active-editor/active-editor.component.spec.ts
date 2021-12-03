import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveEditorComponent } from './active-editor.component';

describe('ActiveEditorComponent', () => {
  let component: ActiveEditorComponent;
  let fixture: ComponentFixture<ActiveEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
