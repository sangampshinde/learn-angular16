import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practise18Component } from './practise18.component';

describe('Practise18Component', () => {
  let component: Practise18Component;
  let fixture: ComponentFixture<Practise18Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Practise18Component]
    });
    fixture = TestBed.createComponent(Practise18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
