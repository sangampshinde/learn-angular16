import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practise12Component } from './practise12.component';

describe('Practise12Component', () => {
  let component: Practise12Component;
  let fixture: ComponentFixture<Practise12Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Practise12Component]
    });
    fixture = TestBed.createComponent(Practise12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
