import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parctise2Component } from './parctise2.component';

describe('Parctise2Component', () => {
  let component: Parctise2Component;
  let fixture: ComponentFixture<Parctise2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Parctise2Component]
    });
    fixture = TestBed.createComponent(Parctise2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
