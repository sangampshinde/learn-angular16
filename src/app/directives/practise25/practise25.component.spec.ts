import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practise25Component } from './practise25.component';

describe('Practise25Component', () => {
  let component: Practise25Component;
  let fixture: ComponentFixture<Practise25Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Practise25Component]
    });
    fixture = TestBed.createComponent(Practise25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
