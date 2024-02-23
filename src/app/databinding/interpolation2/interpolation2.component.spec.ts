import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Interpolation2Component } from './interpolation2.component';

describe('Interpolation2Component', () => {
  let component: Interpolation2Component;
  let fixture: ComponentFixture<Interpolation2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Interpolation2Component]
    });
    fixture = TestBed.createComponent(Interpolation2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
