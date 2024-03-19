import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practise9Component } from './practise9.component';

describe('Practise9Component', () => {
  let component: Practise9Component;
  let fixture: ComponentFixture<Practise9Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Practise9Component]
    });
    fixture = TestBed.createComponent(Practise9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
