import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practise14Component } from './practise14.component';

describe('Practise14Component', () => {
  let component: Practise14Component;
  let fixture: ComponentFixture<Practise14Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Practise14Component]
    });
    fixture = TestBed.createComponent(Practise14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
