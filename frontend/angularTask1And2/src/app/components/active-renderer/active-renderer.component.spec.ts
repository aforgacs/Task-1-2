import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveRendererComponent } from './active-renderer.component';

describe('ActiveRendererComponent', () => {
  let component: ActiveRendererComponent;
  let fixture: ComponentFixture<ActiveRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
