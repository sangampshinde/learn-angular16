import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practise17Component } from './practise17.component';

describe('Practise17Component', () => {
  let component: Practise17Component;
  let fixture: ComponentFixture<Practise17Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Practise17Component]
    });
    fixture = TestBed.createComponent(Practise17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
