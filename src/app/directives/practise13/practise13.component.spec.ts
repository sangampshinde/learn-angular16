import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practise13Component } from './practise13.component';

describe('Practise13Component', () => {
  let component: Practise13Component;
  let fixture: ComponentFixture<Practise13Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Practise13Component]
    });
    fixture = TestBed.createComponent(Practise13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
