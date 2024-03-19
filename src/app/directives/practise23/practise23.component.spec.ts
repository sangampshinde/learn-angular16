import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practise23Component } from './practise23.component';

describe('Practise23Component', () => {
  let component: Practise23Component;
  let fixture: ComponentFixture<Practise23Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Practise23Component]
    });
    fixture = TestBed.createComponent(Practise23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
