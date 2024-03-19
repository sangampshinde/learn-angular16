import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Twowaydatabinding3Component } from './twowaydatabinding3.component';

describe('Twowaydatabinding3Component', () => {
  let component: Twowaydatabinding3Component;
  let fixture: ComponentFixture<Twowaydatabinding3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Twowaydatabinding3Component]
    });
    fixture = TestBed.createComponent(Twowaydatabinding3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
