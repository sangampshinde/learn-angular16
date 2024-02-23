import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Interpolation1Component } from './interpolation1.component';

describe('Interpolation1Component', () => {
  let component: Interpolation1Component;
  let fixture: ComponentFixture<Interpolation1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Interpolation1Component]
    });
    fixture = TestBed.createComponent(Interpolation1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
