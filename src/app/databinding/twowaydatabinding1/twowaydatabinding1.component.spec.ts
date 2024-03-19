import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Twowaydatabinding1Component } from './twowaydatabinding1.component';

describe('Twowaydatabinding1Component', () => {
  let component: Twowaydatabinding1Component;
  let fixture: ComponentFixture<Twowaydatabinding1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Twowaydatabinding1Component]
    });
    fixture = TestBed.createComponent(Twowaydatabinding1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
