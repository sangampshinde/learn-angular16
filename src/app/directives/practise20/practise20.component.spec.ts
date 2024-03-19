import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practise20Component } from './practise20.component';

describe('Practise20Component', () => {
  let component: Practise20Component;
  let fixture: ComponentFixture<Practise20Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Practise20Component]
    });
    fixture = TestBed.createComponent(Practise20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
