import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parctise1Component } from './parctise1.component';

describe('Parctise1Component', () => {
  let component: Parctise1Component;
  let fixture: ComponentFixture<Parctise1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Parctise1Component]
    });
    fixture = TestBed.createComponent(Parctise1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
