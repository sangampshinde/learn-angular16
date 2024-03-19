import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Twowaydatabinding2Component } from './twowaydatabinding2.component';

describe('Twowaydatabinding2Component', () => {
  let component: Twowaydatabinding2Component;
  let fixture: ComponentFixture<Twowaydatabinding2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Twowaydatabinding2Component]
    });
    fixture = TestBed.createComponent(Twowaydatabinding2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
