import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Interpolation3Component } from './interpolation3.component';

describe('Interpolation3Component', () => {
  let component: Interpolation3Component;
  let fixture: ComponentFixture<Interpolation3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Interpolation3Component]
    });
    fixture = TestBed.createComponent(Interpolation3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
