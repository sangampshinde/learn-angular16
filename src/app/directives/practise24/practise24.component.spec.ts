import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practise24Component } from './practise24.component';

describe('Practise24Component', () => {
  let component: Practise24Component;
  let fixture: ComponentFixture<Practise24Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Practise24Component]
    });
    fixture = TestBed.createComponent(Practise24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
