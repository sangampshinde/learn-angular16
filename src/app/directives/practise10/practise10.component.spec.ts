import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practise10Component } from './practise10.component';

describe('Practise10Component', () => {
  let component: Practise10Component;
  let fixture: ComponentFixture<Practise10Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Practise10Component]
    });
    fixture = TestBed.createComponent(Practise10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
