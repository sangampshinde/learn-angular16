import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practise6Component } from './practise6.component';

describe('Practise6Component', () => {
  let component: Practise6Component;
  let fixture: ComponentFixture<Practise6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Practise6Component]
    });
    fixture = TestBed.createComponent(Practise6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
